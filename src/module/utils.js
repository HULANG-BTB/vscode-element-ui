const fs = require('fs');
const path = require('path');

const readDir = (dir) => {
    const dirList = fs.readdirSync(dir)
    const ret = []
    dirList.forEach(children => {
        const stat = fs.statSync(path.join(dir, children))
        if (stat.isDirectory()) {
            ret.push(...readDir(path.join(dir, children)))
        } else {
            ret.push(path.join(dir, children))
        }
    });
    return ret
}

module.exports = {
    readDir
}