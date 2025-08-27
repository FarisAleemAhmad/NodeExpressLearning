const express = require('express')
const path = require('path')

const app = express()

// middleware and statics setup
// static assets are files that the server doesnt have to change -- javascript/images/logos/css
app.use(express.static('./public'))



/* 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
}) */
    // The html file can be sent in two more ways apart from this
        // 1) put it in public as a static asset
        // 2) use SSR (server side rendering)


app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, ()=>{
    console.log("server is listening on port 5000...")
})


// app.get -- default method of browsers
// app.put
// app.post
// app.delete
// app.all -- answers to all of the above
// app.use -- default for middlewares
// app.listen -- allows port expose