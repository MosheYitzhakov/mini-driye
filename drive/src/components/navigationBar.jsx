import React from 'react';
import { Link } from "react-router-dom";
import './navigationBar.css'
export const Bar = ({ pathname }) => {
    const split = pathname.split('/');
    let addLink = `/${split[1]}`
    return (
        <div>
            <nav>
                <span key={"2gg"}><Link to={"/"}>{"main"}</Link>{" "}</span>
                {split.map((v, i) => {
                    if (i === 0) {
                        return null
                    }
                    else {
                        if (i > 1) {
                            addLink += `/${v}`;
                        }
                        return <span key={i * 2}>{'>'}<Link to={addLink}>{v}</Link>{" "}</span>
                    }
                })}
            </nav>
        </div>
    )
} 