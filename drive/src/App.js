// import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes, Route, Link } from "react-router-dom";
import { Home } from './components/home';
import { Bar } from './components/navigationBar';
function App() {
  return (
    <div className="App">
 <BrowserRouter>
  <Bar/>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route index path="/login" element={<Home />} />
        <Route path="/home" element={<Home />}>
          <Route path="info" element={<Home />} />
          <Route path="todos" element={<Home />} />
          <Route path="posts" element={<Error />} />

          <Route path="albums" element={<Error />} />
          <Route path="albums/:albumsId" element={<Error />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
const Error = () => {
  return (<>
    <h2>404</h2>
    <p>page not found</p>
    <Link to={"/Home"}> Login </Link>
  </>);
}
export default App;
