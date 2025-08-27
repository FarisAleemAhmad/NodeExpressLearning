// this file handles routers, controllers, and other methods beside get (post put delete)
// the routes and controllers folder is utilised in this file

const express = require('express')
const app = express()
const people = require('./routes/people')



// static assets
app.use(express.static('./methods-public'))

// parse form data (to get the data from a post)
app.use(express.urlencoded( {extended:false }))

// parse json
app.use(express.json())

app.use('/api/people', people)


app.post('/login', (req, res) => {
    const {name} = req.body
    if (name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials.')

})


// MOVED TO ROUTES FOLDER / People.js
/* app.get('/api/people', (req, res) => {
    res.status(200).json({success:true,data:people})
})


app.post('/api/people/postman', (req, res) => {
    const {name} = req.body
    if (!name){
        return res.status(400).json({sucess:false,msg:'please try again with a name value'})
    }
    res.status(201).json({success:true, person:name})
})

app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person) => person.id === Number(id))
    if (!person){
        return res.status(404).json({success:false, msg: `no person with the id ${id}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data: newPeople})

})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person){
        return res.status(404).json({success:false, msg: `no person with the id ${req.params.id}`})
    }
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data:newPeople})
})
 */

app.listen(5000, ()=>{
    console.log("sever is listening on port 5000...")
})
