const express = require('express');

const fsP = require('fs/promises')
const router = express.Router();
const path = require('path');
const { existingName, dataItem } = require('../fonction');
module.exports = router;

router.put('/*', async (req, res) => {
   const command = req.body.command;
   let filePath = path.join(__dirname, '../userData', req.url);
   const index = filePath.lastIndexOf('\\');
   const filePathSlice = filePath.slice(0, index)
   const newName = path.join(filePath.slice(0, index), req.body.name)


   const dir = await existingName(filePathSlice, req.body.name)
   if (dir) {
      return res.status(409).send('An item with this name already exists')
   }
   try {
      if (command === 'rename') {
         await fsP.rename(filePath, newName)
      } else if (command === 'copy') {
         if (req.body.name.includes('.')) {
            await fsP.copyFile(filePath, newName)
         } else {
            await fsP.cp(filePath, newName, { recursive: true })
         }
      }
      res.send(await dataItem(filePathSlice, req.body.name));
   } catch (error) {
      res.status(409).send(error.message)
   }

})