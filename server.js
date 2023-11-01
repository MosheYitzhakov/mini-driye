const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors');
const sfP = require('fs/promises')

app.use(cors());

// const port = 
app.get('/',(req,res)=>{

    res.send( '/index.html');
})
app.listen(3333, ()=>{
    console.log("Server is running on http://localhost:3333");
})