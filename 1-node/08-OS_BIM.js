const os = require('os')

// OS usage - info about current user
const user = os.userInfo()
console.log(user)
// OS usage - uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)
// OS usage - other methods
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)

