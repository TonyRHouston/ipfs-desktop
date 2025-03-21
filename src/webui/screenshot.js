const { ipcRenderer, desktopCapturer } = require('electron')
const ipcMainEvents = require('../common/ipc-main-events')

async function streamHandler (format, stream) {
  const track = stream.getVideoTracks()[0]
  //@ts-ignore
  const imageCapture = new window.ImageCapture(track)
  const bitmap = await imageCapture.grabFrame()
  const canvas = document.createElement('canvas')
  canvas.width = bitmap.width
  canvas.height = bitmap.height
  const ctx = canvas.getContext('2d')
  ctx?.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height)
  return canvas.toDataURL(format)
}

async function screenshot (format) {
  format = format || 'image/png'

  const sources = await desktopCapturer.getSources({ types: ['screen'] })
  const output = []

  for (const source of sources) {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
    })

    const image = await streamHandler(format, stream)

    output.push({
      name: source.name,
      image: image
    })
  }

  return output
}

module.exports = function () {
  ipcRenderer.on('screenshot', async () => {
    const out = await screenshot()
    ipcRenderer.send(ipcMainEvents.SCREENSHOT, out)
  })
}
