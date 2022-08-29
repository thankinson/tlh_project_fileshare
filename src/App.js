import {React, useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./globalstyles/globalstyle.css"
import { Home } from "./pages/home";
import { Login } from "./content/login";


const App = () =>{

  useEffect(() => {
    document.title = "File Upload";
  }, []);

  const [user, setUser] = useState();
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />

      
      </Routes>    
    
    </BrowserRouter>

  )
}

export default App;