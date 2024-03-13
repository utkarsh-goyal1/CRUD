const express=require('express');
const app=express();
const path=require('path');
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
const {v4:uuid}=require('uuid');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

let comments=[
    {
        id:uuid(),
        name:"My NAME IS SAMARTH VOHRA",
        short:"- samarth vohra",
        Quote:"Hello"
    },
    {
        id:uuid(),
        name:"My NAME IS MONU",
        short:"- monu",
        Quote:"Hello"
    }
    ,
    {
        id:uuid(),
        name:"My NAME IS VIRAT",
        short:"- virat",
        Quote:"Hello"
    },
    {
        id:uuid(),
        name:"My NAME IS ROHIT",
        short:"- rohit",
        Quote:"Hello"
    },
    {
        id:uuid(),
        name:"My NAME IS SMITH",
        short:"- smith",
        Quote:"Hello"
    }
]
//display all the comments
app.get('/comments',(req,res)=>{
    res.render('index',{comments});
})

//enter a new product
app.get('/comments/new',(req,res)=>{
    res.render('new');
})

app.post('/comments',(req,res)=>{
    const {name,Quote}=req.body;
    comments.push({name,short:"-gla",Quote,id:uuid()});
    res.redirect("/comments");
})

//show a comment
app.get('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const foundComment=comments.find((comment)=>comment.id===(id));
    res.render('show',{comment:foundComment});
})


app.get('/',(req,res)=>{
    res.send("Connected");
})
app.listen(3000,()=>{
    console.log("Server Connected");
})