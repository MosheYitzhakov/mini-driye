const express = require('express');

const fsP = require('fs/promises')
const router = express.Router();
const path = require('path');



router.delete('/*', async (req, res) => {
    let data = path.join(__dirname, '../userData', req.url);
    const index = data.lastIndexOf('\\');
    const filePathSlice = data.slice(index)
    try {
        const data = await fsP.stat(path.join(__dirname, '../userData', req.url))
        if (data.isFile()) {
            await fsP.unlink(path.join(__dirname, '../userData', req.url));
            res.send('delete')
        } else if (data.isDirectory()) {
            await fsP.rm(path.join(__dirname, '../userData', req.url), { recursive: true, force: true })
            res.send({delete:filePathSlice})
        }

    } catch (error) {
        return(error.message);
    }

})
module.exports = router;