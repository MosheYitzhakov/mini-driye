import React from 'react';

export const Created = () => {
    const handelNewFile = () => {
        console.log("creat new  file");
        return <h2>creat new  file</h2>
    }
    const handelNewFolder = () => {
        console.log("creat new  folder");
        return <h2>creat new folder </h2>
    }
    return (
        <div>
            <button onClick={handelNewFile}>new File</button>
            <button onClick={handelNewFolder}>new Folder</button>
        </div>
    )
}