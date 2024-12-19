import { useState } from "react"
import { Copy } from "./copy"
import { Rename } from "./rename"
import { Link, useLocation } from "react-router-dom"
import { deleteI } from "./delete"
import "./item.css"

export const Item = ({ name, type, created, setF }) => {
    let { pathname } = useLocation();
    const [ItemsC, setItemsC] = useState(false)
    const [ItemsR, setItemsR] = useState(false)
    const [infor, setInfor] = useState(null)
    let path = "/"
    if (pathname === '/') {
        path = "";
    }
    let pathTo = `${pathname}${path}${name}`
    return (
        <div className={type} >
            <Link to={pathTo}> <span> {name}  </span></Link>
            <div>
               
                <button onClick={() => { setItemsC((prv) => !prv) }}>Copy</button>
                <button onClick={() => { setItemsR((prv) => !prv) }}>Rename</button>
                <button onClick={() => { deleteI(pathname, name, setF) }}>delete</button>
                <button onClick={() => { setInfor(infor === null ? info(name, type, created, setInfor) : null) }}>info</button>
                <>{ItemsC && <Copy name={name} setItems={setItemsC} setF={setF} />}
                    {ItemsR && <Rename name={name} setItems={setItemsR} setF={setF} />}
                    {infor && infor}</>
            </div>
        </div>
    )
}
const info = (name, type, created, setInfor) => {
    return <div onClick={() => setInfor(null)}>
        <h2>info</h2>
        <h5>name : {name}</h5>
        <h5>type : {type}</h5>
        <h5>created : {created}</h5>
    </div>
}