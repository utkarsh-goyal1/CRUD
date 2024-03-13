const express=require('express');

const router=express.Router();//acts as mini express app.

const Blog=require('../Modals/Blogs');//require product collection to display all the products.


router.get('/blogs',async(req,res)=>{
    const blogs=await Blog.find({});
    res.render('index',{blogs});
})

router.get('/blogs/:blogid',async(req,res)=>{
    const {blogid}=req.params;
    const blog=await Blog.findById(blogid);
    res.render('show',{blog});
})


module.exports=router;