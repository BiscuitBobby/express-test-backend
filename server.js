console.log("running")
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res/*, next*/) => {
    console.log('responce')
    //res.status(418).json({message: "I got no tea"})
    res.render("index", {text: "za warudo"})
})

const userRouters = require('./routes/users')
app.use('/users', userRouters)

app.listen(3000)