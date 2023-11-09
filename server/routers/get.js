const express = require('express');

const fsP = require('fs/promises')
const router = express.Router();
const path = require('path');
const { allData } = require('../fonction');
module.exports = router;


router.get('*', async (req, res) => {
console.log(req.path);
console.log(req.url);

    const namePath = path.join(__dirname, '..', 'userData', req.url)
    // const slicePath = namePath.slice(0, -1)
    try {
        const data = await allData(namePath);
        res.send(data)

    } catch (err) {
        console.error(err.message);
        res.status(404).send("no such file or directory" + req.url);
    }
})
