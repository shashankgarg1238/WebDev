
const express = require('express')

const app = express()

const port = 3000

//router handlers
//GET method
app.get('/', function(req, res){
  res.send('<b>Hello World!</b>');
})
//req and res =  request and response

app.get('/anything', function(req, res){
    res.send("hello from the ' /anything ' endpoint");
})


app.post('/',function(req,res){
    res.send("Hello World from the post endpoint");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
