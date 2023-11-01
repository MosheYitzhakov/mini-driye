// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './components/home';
function App() {
  return (
    <div className="App">
      <Home/>
   {/* <Routes> */}
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route index path="/login" element={<Login />} /> */}
        {/* <Route path="/home" element={<Home />}> */}
          {/* <Route path="info" element={<Info />} /> */}
          {/* <Route path="todos" element={<Todos />} /> */}
          {/* <Route path="posts" element={<Posts />} /> */}

          {/* <Route path="albums" element={<Albums />} /> */}
          {/* <Route path="albums/:albumsId" element={<Photos />} /> */}
        {/* </Route> */}
        {/* <Route path="*" element={<Error />} /> */}
      {/* </Routes> */}
    </div>
  );
}
const Error = () => {
  return (<>
    <h2>404</h2>
    <p>page not found</p>
    <Link to={"/login"}> Login </Link>
  </>);
}
export default App;
