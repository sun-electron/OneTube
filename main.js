//I have no idea what most of this does!!! - NCR

const { app, BrowserWindow, Menu } = require('electron')


// Main App Activity: 
app.on('ready', async () => {


    const mainWindow = new BrowserWindow({
        minimizable: true,
        width: 1920,
        height: 1080,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true,
          webviewTag: true
        }
    })

    mainWindow.loadFile('appBASE/index.html')
    mainWindow.removeMenu()


})



//App menu mac os
const isMac = process.platform === 'darwin'

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'about' },
      { role: 'quit' }
    ]
  }] : []),
 
  
  // { role: 'viewMenu' }
  ...(isMac ? [{
    label: 'View',
    submenu: [
      { role: 'reload' },
      { type: 'separator' },
      { role: 'toggleDevTools' },
      { role: 'togglefullscreen' }
    ]
  }] : [])

  
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)




// Right Click Menu using - "electron-context-menu": "^2.3.0"
const contextMenu = require('electron-context-menu');
contextMenu({
  menu: (actions, props, browserWindow) => [

    { role: 'reload' },
    { type: 'separator' },
    { role: 'minimize'},
    { role: 'togglefullscreen' },
    { role: 'close' }

  ]
});
