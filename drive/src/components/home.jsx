import { useEffect, useState } from "react";
// import "./home.css"
import { List } from './list';
import { Create } from "./create";
export const Home = ({ data }) => {
    const [newItem, setNewItem] = useState(false)
    const [folders, setFolders] = useState()
    const [files, setFils] = useState()
    let str = typeof data === 'string';
    useEffect(() => {
        if (data && !str) {
            setFils(data.files)
            setFolders(data.folders)

        }
    }, [data, str])

    return (

        <div >
            {str ? <div style={{
                margin: '20px',
                border: '3px solid blue',
                borderRadius: '10px'
            }}>

                <h2>The content in file is this</h2>
                <h3>{data}</h3>
            </div>
                :
                <div>
                    <button style={{marginTop: "10px"}} onClick={() => { setNewItem((prv) => { return !prv }) }}>new</button>
                    {newItem && <Create setFi={setFils} setFol={setFolders} setN={setNewItem} />}
                    <h1>תיקיות</h1>
                    <br />
                    {folders && <List data={folders} setF={setFolders} />
                    }
                    <h1>קבצים</h1>
                    <br />
                    {files && <List data={files} setF={setFils} />}
                </div>
            }
        </div>
    )
}