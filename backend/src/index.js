const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

require('dotenv').config()

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-hwsjo.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on ${process.env.API_PORT}`)
})