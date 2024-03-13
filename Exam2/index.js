const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const seedDB=require('./seed');
const blogRoutes=require('./routes/blogsRoutes')
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


mongoose.connect('mongodb://127.0.0.1:27017/Blogs')
.then(()=>{
    console.log("Connected to database")
})
.catch((e)=>{
    console.log(e);
})

//seedDB();
app.use(blogRoutes);
app.get('/',(req,res)=>{
    res.send("Connected");
})

app.listen(3000,()=>{
    console.log("Connected");
})