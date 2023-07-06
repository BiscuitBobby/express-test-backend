const express = require('express')
const router = express.Router()

router.get("/", (req, res) =>
    {
        res.send("Le Users")
    }
)

router.get("/:num", (req, res) =>
    {
        res.send(`Le User ${req.params.num}`)
    }
).put((req, res) => {
    res.send(`Update Le User ${req.params.num}`)
}).delete((req, res) => {
    res.send(`DeleteLe User ${req.params.num}`)
})

module.exports = router