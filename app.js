// node package manager
// npm --version

// local dependency -- only in this project
// npm i <packageName>

// global dependency -- use in any project
// npm install -g <packageName>

// package.json -- manifest file storing information about projects/packages
// manual approach -- create package.json in the root
// npm init - step by step, enter to skip
// npm init -y (default everything)

const _ = require('lodash')

const items = [1, [1, [1, 2],2], 2, [1,2], 3, [1,2]]
const newItems = _.flattenDeep(items)
console.log(newItems)