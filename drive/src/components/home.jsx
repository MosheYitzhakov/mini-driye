import React, { useState } from 'react';
import { Created } from './creatNewThing';
import axios from "axios";
export const Home = () => {
    const [newF, setNewF] = useState(false);
    const [allData,setAllData] = useState();
  (  async()=>{
        try {
            const {data} = await  axios.get('http://localhost:3333/');
            setAllData(data);
        } catch (error) {
            console.log(error);
        }
    })()
    const handleNew = () => {
        setNewF(true)
    }

    return (
        <>
        {/* <input onClick={setNewF(false)}> */}
            <div>
                <h1>Welcome to the home page</h1>
                <input type='button' value={'new +'} onClick={handleNew} />
                {allData && <Created setNewF='setNewF' />}

            </div>
            <div className='homeFiolder'>
                <h3>תיקיות</h3>
            </div>
            <div className='homeFiles'>
                <h3>קבצים</h3>

            </div>
            {/* </input> */}
        </>
    )
}