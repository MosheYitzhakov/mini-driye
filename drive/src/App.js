// import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, useLocation } from "react-router-dom";
import { Home } from './components/home';
import { Bar } from './components/navigationBar';
function App() {
 const { pathname} = useLocation();
 console.log(pathname);
  return (
    <div className="App">
      
  <Bar/>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='*' element={<Home pathname={pathname}/>}/>
       
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      
    </div>
  );
}
// const Error = () => {
//   const { albumsId } = useParams();
//   console.log(albumsId);
//   return (<>
//     <h2>404</h2>
//     <p>page not found</p>
//     <p>{`url ${albumsId}`}</p>
//     <Link to={"/Home"}> Login </Link>
//   </>);
// }
export default App;
