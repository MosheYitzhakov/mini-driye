import React, { useEffect, useState } from 'react';
import "./home.css"
// import { Created } from './creatNewThing';
import axios from "axios";
import { Table } from './createTible';
export const Home = ({ pathname }) => {
    const [data, setData] = useState({});
    const url = "http://localhost:3333";
    useEffect(() => {
        async function name() {
            try {
                if (typeof pathname === 'undefined') {
                    const { data } = await axios.get(url);
                    setData(data);
                    console.log(url);
                } else {
                    const { data } = await axios.get(url + pathname);
                    setData(data);
                    console.log(url + pathname);
                }


            } catch (error) {
                console.log(error);
            }
        }
        name()
    }, [pathname])
    const dot = pathname.slice(-4, -3) === '.';
    console.log(dot);
    console.log(data);
    return (
        <div >
            <h1>path name is {pathname}</h1>
            {dot ? <h3>{JSON.stringify(data)}</h3> :
                <div>
                    <h2>תיקיות</h2>
                    {data.folders &&
                        <Table data={data.folders} />}
                    <h2>קבצים</h2>

                    {data.files &&

                        <Table data={data.files} />}
                </div>
            }
        </div>


    )
}