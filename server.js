console.log("running")
const express = require('express')
const app = express()



app.get('/', (req, res/*, next*/) => {
    console.log('responce')
    res.status(418).json({message: "I got no tea"})
    res.render("index")
})

app.listen(3000)