const express = require('express')
const {products} = require('./data')

const app = express()

// this will send the content type application/json
app.get('/', (req, res) => {
    res.send(`
        <h1> Home Page</h1>
        <a href="/api/products">products</a>
        `)
})

// a way to send specific parts of the json data. LEARN JSON MANIPULATION
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image};
    })
    res.json(newProducts)
} )

// ROUTE PARAMETERS EXAMPLE : a way to handle input to url
// :productID is a placeholder for a variable
app.get('/api/products/:productID', (req, res) => {
    // picks up product ID for request parameters
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    // incase the input prod.id does not match any id in the data
    if (!singleProduct){return res.status(404).send("product does not exist")}
    res.json(singleProduct)
} )

// QUERY PARAMTERS EXAMPLE : another way to handle input in url
// format is https://localhostxxx/yyy/query?key=value&key2=value2
app.get('/api/v1/query', (req, res)=>{
    const {search, limit} = req.query
    let sortedProducts = [...products];

    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    // if queries match nothing
    if(sortedProducts.length < 1){
        //res.status(200).send("no products matching your search")
        return res.status(200).json({success:true, data:[]})
    }

    res.status(200).json(sortedProducts)
})


app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})



app.listen(5000, ()=>{
    console.log("sever is listening on port 5000...")
})