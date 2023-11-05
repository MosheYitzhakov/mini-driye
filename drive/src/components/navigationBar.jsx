import React from 'react';
import { Link } from "react-router-dom";
export const Bar = () => {
    return (
        <div>

            <nav>
                <Link to={"info"}>info</Link> { }
                <Link to={"posts"}>posts</Link> { }
                <Link to={"albums"}>albums</Link> { }
                <Link to={"todos"}>todos</Link> { }
                <Link to={"/login"}>logout</Link>
            </nav>
        </div>
    )
} 