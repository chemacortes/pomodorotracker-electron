const electron = require('electron');
const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

app.on('ready',() =>{
	mainWindow = new BrowserWindow({
		width:1000,
		height:700
	});
	mainWindow.setTitle('Pomodoro Tracker');
	mainWindow.loadURL('https://pomodoro-tracker.com/')
	
	mainWindow.on('closed',() =>{
		app.quit();
	});
	
});