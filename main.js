const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: 'file://${__dirname}/dist/assets/logo.png'
  })

  win.loadURL('file://${__dirname}/dist/index.html')

  //win.webContents.openDevTools()

  //event when the window is closed
  win.on('closed', function () {
    win = null
  })
}

//create Window on Electron initialization
app.on('ready', createWindow)

//quit when all windows are closed
app.on('window-all-closed', function() {

  //On macOS specific close  process
  if (process.plataform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  //macOS specific close  process
  if (win == null) {
    createWindow()
  }
})
