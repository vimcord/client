const electron = require('electron')
const proc = require('child_process')
const path = require('path')

// Log Electron path
console.log(electron)

// spawn Electron
const child = proc.spawn(electron, [path.join(__dirname, './electron/', 'app.js')])