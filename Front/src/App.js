import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './components/login/Login';
import {useCookies} from 'react-cookie';
import Detail from './pages/detail/Detail';

function App() {
  const [token,setToken]=useCookies(["user-token"]);
  useEffect(()=>{
    console.log("user-token: "+token["user-token"]);
  },[])
  return (
    <div>
      {token["user-token"]?
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/Services/:category" element={<Services></Services>}/>
                <Route path="/Services/:category/:id" element={<Detail></Detail>}/>
              </Routes>
            </BrowserRouter>
      :<Login></Login>}
    </div>
  );
}

export default App;
