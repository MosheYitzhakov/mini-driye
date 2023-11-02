const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors');
// const axios = require('axios')
const fsP = require('fs/promises')

app.use(cors());

app.use(express.static('userData'))

const getData = async (url) => {
    const data = await fsP.readdir(url)
    const organizedFolder = { files: [], folder: [] };
    try {
        for (v of data) {
            const dataV = await fsP.stat(path.join(url, v));
            if (dataV.isDirectory())
                organizedFolder.folder.push(v);
            else
                organizedFolder.files.push(v)
        }

    } catch (error) {
        return error;
    }

    return organizedFolder;
}

const getInfo = async (url) => {
    try {
        const data = await fsP.stat(url);
        const info = {
            type: data.isFile() ? 'file' : 'folder',
            size: data.size,
            atime: data.atime,
            created: data.birthtime
        }
        return info;
    } catch (error) {
        return error;
    }
}
app.get('/', async (req, res) => {
    try {
        const data = path.join(__dirname, 'userData')
        // const all = await getData(data)
        const all = await getInfo(data)
        console.log(all);
    } catch (err) {
        console.error(err.message);
    }
    res.send();
})


app.get('/*', async (req, res) => {
    const namePath = path.join(__dirname, 'userData', req.url)
    const slicePath = namePath.slice(0, -1)
    try {
        // const data = await getData(slicePath);
        const data = await getInfo(slicePath);


        console.log(data);
        // if (data === undefined) {
        //     console.log("There is nothing in the folder");
        // } else {
        //     console.log(data);
        // }
    } catch (err) {
        console.error(err.message);
    }
    res.send() // כשמקבלים צריך לבדוק שהוא לא ריק
})

app.post('/', async (req, res) => {
    try {
        const pathU = path.join(__dirname, 'new-user')
        const createDir = await fsP.mkdir(pathU, { recursive: true });

        console.log(`created ${createDir}`);
    } catch (err) {
        console.error(err.message);
    }
    res.send('/index.html');
})
const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})