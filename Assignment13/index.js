const express=require('express');
const app=express();
const path=require('path');
 var bodyParser = require('body-parser');
//  var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res,next) => {
let name = req.query.name;
if (!name) {
name = "person";
}
res.send(`Welcome ${name}`);
});
app.get('/q1',(req,res)=>{
   res.send("this is question 1");
});
 app.get('/q2', function(req, res,next) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
//   app.post('/result', urlencodedParser, (req, res) => {
//    console.log('Got body:', req.body);
//    res.sendStatus(200);
// });

 app.get('/q3',(req,res)=>{
    res.send("this is question 3");
 });
 app.get('/q4',(req,res)=>{
    res.send("this is question 4");
 });

app.post('/result',express.urlencoded({extended:true}), function(req,res){
  res.send(req.body.username);
  res.send("hello again");
});
app.listen(3000);