const express = require('express')
const Post = require('../models/post')


const router = express.Router()

router.get('/', (req, res) => {
    Post.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.status(500).json({message: 'deu ruim'})
        })
})

router.post('/', (req, res) => {
    const post = new Post({
        author: req.body.author,
        title: req.body.title,
        text: req.body.text
    })
    post.save()
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(500).json({message: 'deu ruim'})
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Post.findById(id)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json({message: 'deu ruim'})
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Post.findByIdAndRemove(id)
        .then(post => {
            res.status(200).end()
        })
        .catch(err => {
            res.status(500).json({message: 'deu ruim'})
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const data = {
        author: req.body.author,
        title: req.body.title,
        text: req.body.text
    }
    Post.findByIdAndUpdate(id,data, {new: true})
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json({message: 'deu ruim'})
        })
})
module.exports = router