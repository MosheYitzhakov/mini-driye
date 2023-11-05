const express = require('express');

const fsP = require('fs/promises')
const router = express.Router();
const path = require('path');
module.exports = router;

router.put('/*', (req, res) => {
   const command = req.body.command;
   console.log(command);
   let filePath = path.join(__dirname, '../userData' + req.url);
   const index = filePath.lastIndexOf('\\');
   const newName =path.join(filePath.slice(0,index),req.body.name)

   console.log(filePath);
   console.log(newName);


   if(command === 'rename'){
    fsP.rename(filePath,newName)
    .then(()=>{
    res.send("success")
    }) .catch((err)=>console.error(err));
   } else if (command === 'copy') {
    fsP.cp(filePath,newName,{ recursive: true })
    .then(()=>{
    res.send("success")
    }) .catch((err)=>console.error(err));
   } 
})