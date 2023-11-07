import React from "react";
import { Item } from "./item";

export const List = ({ data, setF}) => {
    return (
        <>{data.map((item, i) => {
            return <React.Fragment key={i}> 
            <Item key={i} name={item.name} created={item.created} type={item.type} setF={setF}/>
                <br /><br />
            </React.Fragment>
        })}</>
    )
}

