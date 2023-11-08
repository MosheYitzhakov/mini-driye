import { useEffect, useState } from "react";
import "./home.css"
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

            {str ? <h3>{data}</h3> :
                <div>
                    <button onClick={() => { setNewItem((prv) => { return !prv }) }}>new</button>
                    {newItem && <Create setFi={setFils} setFol={setFolders} setN={setNewItem}/>}
                    <h2>תיקיות</h2>
                    {folders && <List data={folders} setF={setFolders}/>
                    }
                    <h2>קבצים</h2>
                    {files && <List data={files} setF={setFils}/>}
                </div>
            }
        </div>
    )
}