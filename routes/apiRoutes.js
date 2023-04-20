const axios = require("axios")
const router = require('express').Router();
const Book = require('../models/book');

router.route('/books').post((req, res) => {
    Book.create(req.body).then((results)=>{
        res.json(results)
    }).catch(err => res.status(500).json(err))
});

router.route('/googlebooks/:title').get((req, res) => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title).then((results)=>{
        res.json(results.data.items)
    })
});

router.route("/books").get((req, res)=>{
    Book.find().then((results) => {
        res.json(results)
    }).catch(console.err)
})

router.route("/books/:id").delete((req, res)=>{
    Book.findByIdAndDelete(req.params.id).then((data)=>
    res.json(data))
})
module.exports = router;