// setup and requires
const connectDB = require('./db/connect')
const express = require('express')
app = express()
const routes = require('./routes/tasks')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')


// MIDDLEWARES
app.use(express.static('./public'))
app.use(errorHandler)
app.use(express.json())

// ROUTES

// hello route
app.use('/api/v1/tasks', routes)

app.use(notFound)


// app.get('/api/v1/tasks')         -- get all tasks
// app.post)'/api/v1/tasks')        -- create a new task
// app.get('/api/v1/tasks/:id')     -- get a single task
// app.patch('/api/v1/tasks/:id')   -- edit a task
// app.delete('/api/v1/tasks/:id')  -- delete a task






const port = 3000

const start = async () => {
    try 
    {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {console.log(`server is listening on port ${port}...`)})
    } 
    catch (error) 
    {
        console.log(error)   
    }
}

start()


