const { app, BrowserWindow } = require("electron");
const fs = require("fs");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			nodeIntegration: true,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true,
		},
	});
	/*...*/
	const python = require("child_process").spawn("py", ["./unzip.py"]);
	// console.log(python);
	python.stdout.on("data", function (data) {
		console.log("data: ", data.toString("utf8"));
		console.log("test");
	});
	python.stderr.on("data", function (data) {
		console.log("err: ", data.toString("utf8"));
		console.log("test");
	});

	win.loadFile("index.html");

	win.webContents.openDevTools();
};
app.whenReady().then(() => {
	fs.writeFile("test.txt", "hello", function (err) {
		if (err === undefined) {
			console.log("Success");
		} else {
			console.log("Oops");
		}
	});
	createWindow();
});

try {
	require("electron-reloader")(module);
} catch (_) {}
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
