require('dotenv').config()
const express = require("express")
const ejs = require("ejs")
const port = process.env.port || 3000

const app = express()
app.use(express.static("public"))
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("./index.ejs")
})

app.listen(port, () => {console.log("server started on port " + port)})

// https://youtu.be/ZFQkb26UD1Y?t=5912