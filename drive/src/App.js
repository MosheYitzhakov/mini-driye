// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Home } from './components/home';
import { Bar } from './components/navigationBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const { pathname } = useLocation();
  const [data, setData] = useState();
  const [err, setEror] = useState();
  const url = "http://localhost:3333";
  useEffect(() => {
    async function name() {
      try {
        if (typeof pathname === 'undefined') {
          const { data } = await axios.get(url);
          setData(data);
        } else {
          const { data } = await axios.get(url + pathname);
          setData(data);
        }


      } catch (error) {
        setEror(error);
      }
    }
    name()
  }, [pathname])
  return (
    <div className="App">
    { err ?  <Error err={setEror}/>:
     <> <h1> Drive</h1>

      <Bar pathname={pathname} />
      <Routes>
        <Route path='*' element={<Home data={data} />} />

      </Routes>
  </>}
  </div>)
}
const Error = ({err}) => {
  return (<>
    <h2>404</h2>
    <p>page not found</p>
    <Link to={"/"} onClick={()=>err(undefined)}> Home </Link>
  </>);
}
export default App;
