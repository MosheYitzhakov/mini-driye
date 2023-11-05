import React, { useEffect, useState } from 'react';
import "./home.css"
// import { Created } from './creatNewThing';
import axios from "axios";
import { Table } from './createTible';
export const Home = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        async function name() {
            try {
                const { data } = await axios.get("http://localhost:3333");
                setData(data);
            } catch (error) {
                console.log(error);
            }
        }
        name()
    }, [])

    return (
        <div >
            
            <h2>תיקיות</h2>
            {data.folders &&
                <Table data={data.folders} />}
            <h2>קבצים</h2>
            {data.files &&
                <Table data={data.files} />}
        </div>


    )
}