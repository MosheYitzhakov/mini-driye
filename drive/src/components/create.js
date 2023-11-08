import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


export const Create = ({ setFol, setFi, setN }) => {
    const { pathname } = useLocation();
    const [neww, setNew] = useState('');
    const [select, setSelect] = useState('file');
    const [p, setP] = useState();

    const newFile = async (e) => {
        let name = neww;
        if (neww.length < 4) {
              e.preventDefault()
            return setP("name is short")
        }
        if (select === 'file') {
          
            const dot = neww.substring(neww.length - 4).includes('.')
            console.log(dot);
            if (!dot) {
                name += '.txt'
            }
        }
        console.log(name);
        axios.post("http://localhost:3333" + pathname, {
            name: name,
            command: select
        }).then((data) => {
            if(select === 'file'){
                setFi((prv)=>[...prv, data.data])
            } else{
                setFol((prv)=>[...prv, data.data])
            }
            setN((prv)=>!prv)
        }
        ).catch(e => {
            if(e.response.status=== 409){
               setP("this is Already exists"); 
            }
            
        })
    }

    return (
        <>
                <br/>
                <input type="text" value={neww} onChange={e => { setNew(e.target.value) }} />
                <br />
                <button onClick={(e) => newFile(e)} >add</button>
                <br />
                <select onChange={(e) => setSelect(e.target.value)}>
                    <option >file</option>
                    <option>folder</option>
                </select>
                {<p>{p}</p>}
        </>

    )
}