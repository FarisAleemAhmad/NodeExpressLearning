const path = require('path')

// returns seperator for this platform
console.log(path.sep)

// returns normalized path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// returns last path (base path)
const baseName = path.basename(filePath)
console.log(baseName)

// returns absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)