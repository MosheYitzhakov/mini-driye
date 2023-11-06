import axios from 'axios';
import React, { useState } from 'react';


export const NewItem = ({ pathTo }) => {
    const [neww, setNew] = useState('');
    const [select, setSelect] = useState()
    const newFile = async () => {
        axios.post("http://localhost:3333" + pathTo, {
            name: neww,
            command: 'folder'
        }).then(
            console.log(`post ${neww}`)
        ).catch(e => {
            console.error(e)
        })
    }
   
    return (
        <>
            <input type="text" value={neww} onChange={e => { setNew(e.target.value) }} />
            <br/>
            <button onClick={() => newFile()} >new</button>
            <br/>
            <select onChange={(e)=>setSelect(e.target.value)}>
                <option >file</option>
                <option>folder</option>
            </select>
        </>

    )
}