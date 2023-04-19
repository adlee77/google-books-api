// const db = require("../models")
const axios = require("axios")
// const express = require('express');
// const app = express()

// function apiRoutes(app){
//     app.get("/api/googlebooks/:title", (req, res)=>{
//         axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title).then((results)=>{
//             res.json(results.data.items)
//         })
//     })
//     app.post("/api/books", (req, res)=>{
//         db.Book.create(req.body).then((results)=>{
//             res.json(results)
//         }).catch(err => res.status(500).json(err))
//     })
//     app.get("/api/books", (req, res)=>{
//         db.Book.find().then((results) => {
//             res.json(results)
//         }).catch(console.err)
//     })
//     app.delete("/api/books/:id", (req, res)=>{
//         db.Book.remove({_id: req.params.id}).then((data)=>
//         res.json(data))
//     })
// }

// module.exports = apiRoutes;


const router = require('express').Router();
const Book = require('../models/book');

router.route('/books').post((req, res) => {
    newBook.create(req.body).then((results)=>{
        res.json(results)
    }).catch(err => res.status(500).json(err))
});

router.route('/googlebooks/:title').get((req, res) => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title).then((results)=>{
        res.json(results.data.items)
    })
});
module.exports = router;