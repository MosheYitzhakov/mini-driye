const express = require('express');

const fsP = require('fs/promises')
const router = express.Router();
const path = require('path');
module.exports = router;



const getData = async (url) => {
    const data = await fsP.readdir(url)
    const organizedFolder = { files: [], folder: [] };
    try {
        for (v of data) {
            const dataV = await fsP.stat(path.join(url, v));
            const info = {
                type: dataV.isFile() ? 'file' : 'folder',
                size: dataV.size,
                atime: dataV.atime,
                created: dataV.birthtime
            }
            if (dataV.isDirectory()){
                organizedFolder.folder.push({ name: v, ...info })
            }
            else{
                organizedFolder.files.push({ name: v, ...info })
            }
        }
    } catch (error) {
        return error;
    }

    return organizedFolder;
}
router.get('/', async (req, res) => {
    try {
        const data = path.join(__dirname,'..', 'userData')
        const all = await getData(data)
        // const all = await getInfo(data)
        console.log(all);
    } catch (err) {
        console.error(err.message);
    }
    res.send();
})


.get('/*', async (req, res) => {
    const namePath = path.join(__dirname,'..', 'userData', req.url)
    const slicePath = namePath.slice(0, -1)
    try {
        // const info = await getInfo(slicePath);
        const data = await getData(slicePath);
        console.log(data);
      
    } catch (err) {
        console.error(err.message);
    }
    res.send() // כשמקבלים צריך לבדוק שהוא לא ריק
})


router.get('/*', async (req, res) => {
    const namePath = path.join(__dirname, 'userData', req.url)
    const slicePath = namePath.slice(0, -1)
    try {
        // const info = await getInfo(slicePath);
        const data = await getData(slicePath);
        console.log(data);
      
    } catch (err) {
        console.error(err.message);
    }
    
    res.send() // כשמקבלים צריך לבדוק שהוא לא ריק
})