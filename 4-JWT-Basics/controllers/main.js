const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')


const login = async (req, res) => {
    const {username, password} = req.body

    // if database -- does username password exist in the database
        // mongo -- requireValidation
        // JOI - another layer of verification
        // check both values here itself (no database)(used here)

    if(!username || !password) {
        throw new CustomAPIError('Please provide email password', 400)
    }
    // to simulate id
    const id = new Date().getDate()

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})
    res.status(200).json({msg:'user created', token })
}



const dashboard = async (req, res) => {
    console.log(req.user.username)

    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, ${req.user.username}`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}