import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import  instance  from './API';

export const Copy = ({ setItems, name, setF }) => {
    const { pathname } = useLocation();
    const [neww, setNew] = useState('');
    const [p, setP] = useState();

    const newFile = async (e) => {
        let newName = neww;
        if (neww.length < 4) {
            e.preventDefault()
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
            command: 'copy'
        }).then((data) => {
            setF((prv)=>[...prv, data.data])
            setItems( false)
        }
        ).catch(e => {
            return setP(e.message)
        })
    }
    return (
        <>
            <h3>new name to copy</h3>
                <input type="text" value={neww} onChange={e => { setNew(e.target.value) }} />
                <br />
                <button onClick={(e) => newFile(e)} >add</button>
                <br />
                {<p>{p}</p>}
        </>

    )
}