const EventEmitter = require('events') // module
const customEmitter = new EventEmitter() // object/instance

customEmitter.on('response' , (name,id)=>{console.log(`data received by ${name} ${id}`)}) // callback function when the event takes place
customEmitter.on('response' , ()=>{console.log('data 2.0 received')}) // can have infinite functions - order matters (emit needs to be after listening(on))

customEmitter.emit('response', 'john', 34) // the strings need to match , the parameters after the first can be sent as parameters for the callback function