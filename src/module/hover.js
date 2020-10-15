
const vscode = require('vscode');
const path = require('path');
const { readDir } = require('./utils');

const files = readDir(path.join(__dirname, '../document'))
const context = {}


files.forEach(file => {
    const filename = file.substr(file.lastIndexOf('\\') + 1).replace('.js', '')
    context[filename] = require(file)
})

const provideHover = (document, position, token) => {

    const tagName = document.getText(document.getWordRangeAtPosition(position));
    if (context[tagName]) {
        let hoverTips = ''
        Object.keys(context[tagName]).forEach(key => {
            hoverTips += context[tagName][key]
            hoverTips += `
            `
        })
        return new vscode.Hover(new vscode.MarkdownString(hoverTips));
    } else {
        return null
    }
}

module.exports = function (context) {
    // 注册hover提示
    context.subscriptions.push(vscode.languages.registerHoverProvider(['vue'], {
        provideHover
    }));
};