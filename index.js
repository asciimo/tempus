const {app, BrowserWindow} = require('electron')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 350,
    height: 150
  }) 

  mainWindow.loadURL(`file://${__dirname}/index.html`);
})

