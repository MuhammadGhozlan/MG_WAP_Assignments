const express=require("express");
const app=express();
var path=require('path');
app.set("view engine","ejs");


app.post('/blue',(req,res,next)=>{
    let x=15;
    res.render('blue.ejs');

});