import Store from 'electron-store'

const store = new Store()

if (store.get('version') !== 5) {
  store.clear()

  // default config
  store.set('ipfsConfig', {
    type: 'go',
    path: '',
    flags: ['--migrate=true', '--routing=dhtclient'],
    keysize: 2048
  })

  store.set('version', 5)
}

export default store
