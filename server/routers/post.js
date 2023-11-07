const express = require('express');

const fsP = require('fs/promises')
const router = express.Router();
const path = require('path');
const { existingName, dataItem } = require('../fonction');
module.exports = router;

router.post('/*', async (req, res) => {
    try {
        const pathUrl = path.join(__dirname, '../userData' + req.url)
        const data = await fsP.stat(pathUrl)
        let createDir;
        if (!data.isDirectory()) {
            res.status(400).send("This is not a directory");
        } else {
            //existing name?
            const dir = await existingName(pathUrl, req.body.name)
            if (dir) {
                return res.status(409).send('An item with this name already exists')
            }
            if (req.body.command === 'file') {
                //create file in the folder
                console.log(path.join(pathUrl, req.body.name));
                createDir = await fsP.open(path.join(pathUrl, req.body.name), 'w');
            } else if (req.body.command === 'folder') {
                createDir = await fsP.mkdir(path.join(pathUrl, req.body.name), { recursive: true });
                //create folder in the folder
            }
            res.send(await dataItem(pathUrl, req.body.name));
        }
    } catch (err) {
       return(err.message);
    }

})