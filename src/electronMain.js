const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win;

function isDev (){
  return process.mainModule.filename.indexOf('app.asar') === -1;
}

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, '../dist/sorteio-natura/index.html'),
    protocol: 'file',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {

  //On macOS specific close  process
  if (process.plataform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  //macOS specific close  process
  if (win === null) {
    createWindow()
  }
})



//
// function createWindow () {
//   win = new BrowserWindow({
//     width: 600,
//     height: 600,
//     backgroundColor: '#ffffff',
//     icon: 'file://${__dirname}/dist/assets/logo.png'
//   })
//
//   win.loadURL('file://${__dirname}/dist/index.html')
//
//   //win.webContents.openDevTools()
//
//   //event when the window is closed
//   win.on('closed', function () {
//     win = null
//   })
// }
//
// //create Window on Electron initialization
// app.on('ready', createWindow)
//
// //quit when all windows are closed
// app.on('window-all-closed', function() {
//
//   //On macOS specific close  process
//   if (process.plataform !== 'darwin') {
//     app.quit()
//   }
// })
//
// app.on('activate', function() {
//   //macOS specific close  process
//   if (win == null) {
//     createWindow()
//   }
// })
