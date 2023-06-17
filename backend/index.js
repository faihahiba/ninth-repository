const express = require('express')
const app = express();
const PORT=5578
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://faihac5:5uX4cNMgxkqOHWOn@cluster0.go3ocu7.mongodb.net/").then(()=>{
    console.log("mongoDB connected successfully")
}).catch((err)=>{
console.log("Error" + err)
});

app.get('/',(req,res)=>{
     res.send('server is hosting ')
})

app.get('/about',(req,res)=>{

})

app.listen(PORT,()=>{
     console.log(`listening on port ${PORT}`);
});
