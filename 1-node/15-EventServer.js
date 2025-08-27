const http = require('http')
const EventEmitter = require('events') // module





const customEmitter = new EventEmitter() // object/instance
const server = http.createServer()

server.on('request', (req, res) => {res.end('welcome')})

server.listen(5000)
