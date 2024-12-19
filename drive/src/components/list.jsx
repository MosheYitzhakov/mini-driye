import React from "react";
import { Item } from "./item";
import "./listt.css"
export const List = ({ data, setF}) => {
    return (
        <div className="main">{data.map((item, i) => {
            return <React.Fragment key={i}> 
            <Item key={i} name={item.name} created={item.created} type={item.type} setF={setF}/>
                <br /><br />
            </React.Fragment>
        })}</div>
    )
}

