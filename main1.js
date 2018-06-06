const electron = require("electron")
const url = require('url')
const path = require('path')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

//To ensure that the window does not go out of scope
let win

function createWindow() {
    win = new BrowserWindow({width:900, height: 700});
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow)