const express = require('express')
const app = express()
const logger = require('./5-logger')
const authorize = require('./6-authorize')

// req => middleware => res

// to avoid repeating code thats required in multiple routes use middleware
// this is here for reference, it has been moved to logger.js
/* const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    // res.send("testing") -- send a data back
    next() 
} */

// to not have to add logger to every route, use app.use
// order matters - middlewares should be above the routes they will intercept
// you can specify the methods that should be interpreted aswell as the routes.
// for example, /api applies to both /api/products and /api/items
// == eg. app.use('/api', logger)

/* options for middlewares
        1) setup our own
        2) express default middlewares
            eg. express.static
        3) third party middleware
            eg. morgan npm - require morgan - famous logger
*/


// multiple middleware functions
app.use([logger, authorize])


app.get('/', (req, res) => {
    /* const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time) */

    res.send('home')
})


app.get('/about', (req, res) => {
    /* const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time) */

    res.send('about')
})

app.get('/api/products', (req, res) => {
    res.send('products')
})

app.get('/api/items', (req, res) => {
    res.send('items')
})


app.listen(5000, ()=>{
    console.log("sever is listening on port 5000...")
})