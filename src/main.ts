import path from "path";
import WindowStateKeeper from 'electron-window-state';
import {
    app,
    BrowserWindow,
} from "electron";

const pathToHTMLFile_userWindow = path.resolve(__dirname, 'index.html');
const pathTo_preloadProcessJS = path.resolve(__dirname, 'preload.electron.js');

/**
 * Без этого кода название окна станет "корявым",
 * electron его перезаписывает какой-то ерундой,
 * здесь мы отменяем его попытку всё испортить.
 *
 * https://github.com/electron/electron/issues/2543
 */
function _stopChangeBrowserWindowTittle(event: Event) {
    event.preventDefault();
}

async function createWindow() {
    let windowState = WindowStateKeeper({
        defaultHeight: 600,
        defaultWidth: 800,
    });

    const rendererProcessWindow_remote = new BrowserWindow({
        title: "Schedule",
        webPreferences: {
            preload: pathTo_preloadProcessJS,
            nodeIntegration: false,
            contextIsolation: true,
        },
        minWidth: 1200,
        minHeight: 800,
    });

    rendererProcessWindow_remote.removeListener('page-title-updated', _stopChangeBrowserWindowTittle);
    rendererProcessWindow_remote.on('page-title-updated', _stopChangeBrowserWindowTittle);

    windowState.manage(rendererProcessWindow_remote);

    await rendererProcessWindow_remote.loadFile(pathToHTMLFile_userWindow);

    // rendererProcessWindow_remote.webContents.openDevTools();
}


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.whenReady().then(async () => {
    createWindow();

    app.on('activate',  () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    });
});