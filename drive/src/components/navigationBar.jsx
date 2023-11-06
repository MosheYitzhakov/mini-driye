import React from 'react';
import { Link } from "react-router-dom";
export const Bar = ({ pathname }) => {
    const split = pathname.split('/');
    let addLink = `/${split[1]}`
    return (
        <div>
            <nav>
            <React.Fragment key={"2gg"}><Link  to={"/"}>{"main"}</Link>{" "}</React.Fragment>
                {split.map((v, i) => {
                    if (i === 0) { 
                        return null }
                    else {
                        if (i > 1) {
                            addLink += `/${v}`;
                        }
                        return <React.Fragment key={i*2}>{'>'}<Link  to={addLink}>{v}</Link>{" "}</React.Fragment>
                    }
                })}
            </nav>
        </div>
    )
} 