const express = require("express");
const router = express.Router();
const dotenv= require('dotenv');
// Bodyparser middleware
require('dotenv').config();

// Load User model
const Blogs = require("../../models/Blogs");

router.post('/all-blog',(req, res)=>{
    if (req.body.category==""){
    Blogs.find({}).then(e=>{
        const all=e.filter((blog,idx)=> !blog.draft && blog.language===req.body.language).reverse().filter((blog,idx)=>idx>=req.body.lower&&idx<=req.body.upper).map(blog=>
            ({id:blog._id,title:blog.data.title,date:blog.date,writter:blog.data.writter,img:blog.data.topImg,category:blog.category})
            )
        
            res.json(all)})}
    else {
    Blogs.find({}).then(e=>{
        const all=e.filter((blog,idx)=> !blog.draft && blog.language===req.body.language && blog.category==req.body.category).reverse().filter((blog,idx)=>idx>=req.body.lower&&idx<=req.body.upper).map(blog=>
            ({id:blog._id,title:blog.data.title,date:blog.date,writter:blog.data.writter,img:blog.data.topImg,category:blog.category})
            )
        
            res.json(all)})}

})
router.post('/blog',(req, res)=>{
    Blogs.findById(req.body.id).then(e=>!e.draft?res.json(e):res.json(""))
    
})


module.exports = router;