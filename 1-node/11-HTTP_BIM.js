//HTTP module -- to create a server. This will be used using express later on

const http = require('http');

// callback function, req is the incoming, res is the sending back
const server = http.createServer(
    (req, res) => {
        if(req.url === '/') {res.end("welcome to our homepage")}
        else if(req.url === '/about') {res.end("this is our about page")}
        else {res.end(
            `
            <h1> OOPS! </h1>
            <p> there is no page found here </p>
            <a href="/">back home</a>
            `)}
    }
)

// port expose
server.listen(5000)

