const { app, BrowserWindow } = require("electron");
const createWindow = () => {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			nodeIntegration: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true,
		},
	});

	win.loadFile("index.html");

	win.webContents.openDevTools();
};
app.whenReady().then(() => {
	createWindow();
});
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
