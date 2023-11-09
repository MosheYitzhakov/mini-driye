import  instance  from './API';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Rename = ({ setItems, name, setF }) => {
    const { pathname } = useLocation();
    const [neww, setNew] = useState('');
    const [p, setP] = useState();

    const newFile = async (e) => {
        e.preventDefault()
        let newName = neww;
        if (neww.length < 4) {
            return setP("name is short")
        }

        let DotNeww = neww.substring(neww.length - 4).includes('.')
        let DotName = name.substring(neww.length - 4).includes('.')
        if (!(DotName === DotNeww)) {
            if (DotName) {
                DotName = name.split('.')
                newName += `.${DotName[1]}`
            } else {
                DotNeww = neww.split('.')
                newName = DotNeww[0]
            }
        }
        instance.put(pathname + name, {
            name: newName,
            command: 'rename'
        }).then((data) => {
            setF((prv) => {
                const index = prv.findIndex(item => item.name === name);
                const newPrv = [...prv]
                newPrv[index] = {...data.data}
                return [...newPrv];
            })
            setItems(false)
        }
        ).catch(e => {
            return setP(e.message)
        })
        
    }

    return (
        <>
            <h3>rename</h3>
                <input type="text" value={neww} onChange={e => { setNew(e.target.value) }} />
                <br />
                <button onClick={(e) => newFile(e)} >rename</button>
                {<p>{p}</p>}
        </>

    )
}