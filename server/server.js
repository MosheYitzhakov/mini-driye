const express = require('express')
const path = require("path")
const fs = require("fs/promises");
const app = express();
const GRouter = require('./routers/get')
const PutRouter = require('./routers/put')
const PostRouter = require('./routers/post')
const DeleteRouter = require('./routers/delete')
const cors = require('cors');
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(path.dirname(__dirname), "drive", "build")))
app.use(async(req,res, next) => {
    console.log(req.url);
    try {
        await fs.access(path.join(__dirname, "userData", req.url.replace("/api", "")))
        console.log("exist");
    } catch(e) {
        console.log(e.message);
    }
    // const flag = fs.
    next();
})
app.use("/api" ,express.static('userData'))

app.use('/api', GRouter)
app.put('/*',PutRouter)
app.post('/*',PostRouter)
app.delete('/*',DeleteRouter)

app.get('/*' ,(req, res) => {
    const htmlPath = path.join(path.dirname(__dirname), "drive", "build", "index.html")
    res.sendFile(htmlPath);
})


const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

