import { useState } from "react"
import { Copy } from "./copy"
import { Rename } from "./rename"
import axios from "axios"
import { Link, useLocation } from "react-router-dom"


export const Item = ({ name, type, created ,setF}) => {
    let { pathname } = useLocation();
    const [Items, setItems] = useState([false, false])
    // const [Items, setCopyItem] = useState(false)
    let path = "/"
    if (pathname === '/') {
        path = "";
    }
    let pathTo = `${pathname}${path}${name}`
    return (
        <>
            <Link to={pathTo}> <span> {name}
                {/* {created} {type}  */}
            </span></Link>


            <button onClick={() => { setItems((prv) => { return [true, false] }) }}>Copy</button>
            <button onClick={() => { setItems((prv) => { return [false, true] }) }}>Rename</button>
            <button onClick={() => { deleteI(pathname + '/' + name) }}>delete</button>
            {/* <select >
                    <option>info</option>
                    <option>{type}</option>
                    <option>{created}</option>
                </select> */}
            <>{Items[0] && <Copy name={name} setItems={setItems} setF={setF} />}
                {Items[1] && <Rename name={name} setItems={setItems} />}</>

        </>
    )
}

const deleteI = (pathname) => {
    axios.delete("http://localhost:3333" + pathname).then((data) => {
        console.log(data.data)
    }
    ).catch(e => {
        console.error(e)
    })
    console.log(pathname);
}