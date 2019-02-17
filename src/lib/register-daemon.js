import { store, createDaemon, logger } from '../utils'
import { app } from 'electron'
import fs from 'fs-extra'
import { join } from 'path'

export default async function (ctx) {
  let config = store.get('ipfsConfig')
  let ipfsd = null

  ctx.getIpfsd = () => ipfsd

  ctx.startIpfs = async () => {
    logger.info('[ipfsd] starting daemon')

    try {
      ipfsd = await createDaemon(config)

      // Update the path if it was blank previously.
      // This way we use the default path when it is
      // not set.
      if (config.path === '') {
        config.path = ipfsd.repoPath
        store.set('ipfsConfig', config)
      }

      logger.info('[ipfsd] daemon started')
    } catch (e) {
      logger.error('[ipfsd] %v', e)
    }
  }

  ctx.stopIpfs = async () => {
    if (!ipfsd) {
      return
    }

    if (!fs.pathExists(join(ipfsd.repoPath, 'config'))) {
      // Is remote api... ignore
      ipfsd = null
      return
    }

    return new Promise((resolve, reject) => {
      ipfsd.stop(err => {
        if (err) {
          return reject(err)
        }

        ipfsd = null
        resolve()
      })
    })
  }

  await ctx.startIpfs()

  app.on('before-quit', async () => {
    logger.info('[ipfsd] stopping daemon')
    await ctx.stopIpfs()
    logger.info('[ipfsd] daemon stopped')
  })
}
