const express = require('express')
const app = express();
const GRouter = require('./routers/get')
const PutRouter = require('./routers/put')
const PostRouter = require('./routers/post')
const DeleteRouter = require('./routers/delete')
const cors = require('cors');
app.use(express.json())
app.use(cors());

app.use(express.static('userData'))

app.get('/*', GRouter)
app.put('/*',PutRouter)
app.post('/*',PostRouter)
app.delete('/*',DeleteRouter)
// app.post('/', async (req, res) => {
//     try {
//         const pathU = path.join(__dirname, 'new-user')
//         const createDir = await fsP.mkdir(pathU, { recursive: true });

//         console.log(`created ${createDir}`);
//     } catch (err) {
//         console.error(err.message);
//     }
//     res.send('/index.html');
// })



const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

