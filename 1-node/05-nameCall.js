const names = require('./3-names')
const sayHi = require('./4-utils')
const alternatives = require('./6-alternativeExports')

console.log(alternatives)
console.log(names)
sayHi(names.john)
sayHi(names.peter)

require("./7-functionExport")