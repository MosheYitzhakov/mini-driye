const fsP = require('fs/promises')
const path = require('path');
 const allData = async (url) => {
    const data = await fsP.readdir(url)
    const organizedFolder = { files: [], folders: [] };
    try {
        for (v of data) {
            const dataV = await dataItem(url, v);
            if (dataV.type === 'folder') {
                organizedFolder.folders.push({ ...dataV })
            }
            else {
                organizedFolder.files.push({...dataV })
            }
        }
    } catch (error) {
        console.log(error.message);
        return error.message;
    }

    return organizedFolder;
}


 const dataItem = async (url, name) => {

    try {
        const dataV = await fsP.stat(path.join(url, name));
        const info = {
             name: name,
            type: dataV.isFile() ? 'file' : 'folder',
            size: dataV.size,
            atime: dataV.atime,
            created: dataV.birthtime
        }
        return info;
    } catch (err) {
        return err.message;
    }


}

const existingName = async(nameUrl, newName)=>{
    const dir = await fsP.readdir(nameUrl)
    for (const item of dir) {
        if (item === newName) {
            return true
        }
    }
    return false
}
module.exports.dataItem = dataItem
module.exports.allData = allData
module.exports.existingName = existingName