const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const PostRouter = require('./route/post_router')

const mongoUrl = 'mongodb://localhost/workshop'
mongoose.connect(mongoUrl)

const app = express()

app.use(bodyParser.json())

app.use('/posts', PostRouter)

app.listen(3000, () => {
    console.log('ta sussa')
})