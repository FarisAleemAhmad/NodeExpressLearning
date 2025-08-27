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
console.log("hi")


// npm install -- installs dependencies from the package.json automatically and sets up the node modules
// therefore nodemodules folder is put in the .gitignore

// npm i <dependency> -D -- dev dependency

// to uninstall -- 
// npm uninstall <package>
// OR -- delete the nodeModules and package-lock, and remove the packages from package.json, then run npm install