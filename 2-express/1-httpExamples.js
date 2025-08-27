const http = require('http')
const {readFileSync} = require('fs')

// get all files
const aboutpage = readFileSync('./navbar-app/index.html')
const aboutStyles = readFileSync('./navbar-app/styles.css')
const aboutImage = readFileSync('./navbar-app/logo.svg')
const aboutLogic = readFileSync('./navbar-app/browser-app.js')

// request and response message creator
const server = http.createServer((req, res) => {
    console.log("server hit")
    // returns method used by request
    console.log(req.method)
    // returns url used by the request
    const url = req.url;
    // home page
    if (url === "/")
    {
    // header writer - status code + header in key value pairs
    res.writeHead(200, {'content-type':'text/html'} )
    // res.write -- a single response by the server
    res.write('homepage')
    // response.end -- signals to the server all responses have been sent.
    res.end()
    }
    // about page
    else if (url === "/about")
    {
    res.writeHead(200, {'content-type':'text/html'} )
    res.write(aboutpage)
    res.end()
    }
    // to handle css 
    else if (url === '/logo.svg')
    {
    res.writeHead(200, {'content-type':'image/svg+xml'} )
    res.write(aboutImage)
    res.end()
    }
    else if (url === '/browser-app.js')
    {
    res.writeHead(200, {'content-type':'image/javascript'} )
    res.write(aboutLogic)
    res.end()
    }
    // 
     else if (url === '/styles.css')
    {
    res.writeHead(200, {'content-type':'text/css'} )
    res.write(aboutStyles)
    res.end()
    } 
    //error page
    else
    {
    res.writeHead(404, {'content-type':'text/html'} )
    res.write('<h1>resousrce not found</h1>')
    res.end()
    }

    
     

    
})

// method on the object server, exposes a port given as param
server.listen(5000)



// issues -- no metadata, no routes (/about, /support etc.)
// header status codes delegate different information
// MIME types describe to the browser what you are sending back, eg. text/html, text/plain
// with http, each sub-ref to another url (styles.css, image, logos, etc) have to be handled manually in the createServer if statements.
// that is why express is used.