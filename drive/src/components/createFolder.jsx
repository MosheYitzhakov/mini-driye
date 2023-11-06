import { Link, useLocation } from "react-router-dom"
// import {  useState } from 'react';
import { NewItem } from "./change file";

export const Table = ({ data }) => {
    let { pathname } = useLocation();
    let path ="/"
    if(pathname ==='/'){
        path = "";
    }
    return <><table className='div-item'>
        <thead>
            <tr>
                <th>type</th>
                <th>name</th>
                <th>created</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, i) => {
                let pathTo = `${pathname}${path}${item.name}`
                return <tr key={i}>
                    
                    <td>{item.type}</td>
                    <td><Link to={pathTo}>{item.name}</Link></td>
                    <td>{item.created}</td>
                    <td ><NewItem pathTo={pathTo} /></td>

                </tr>
            })}

        </tbody>
    </table>

    </>
}