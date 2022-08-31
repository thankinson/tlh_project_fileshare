import {React, useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { tokenLogin } from "./utils";

import "./globalstyles/globalstyle.css"
import styled from "styled-components";
// import { Home } from "./pages/home";
import { Login } from "./content/login";
import { Uploads } from "./content/upload";


const App = () =>{

  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.key("myToken")) {
      tokenLogin(setUser);
    }
  }, []);

  // setUser("tom")
  return (
    <MainContainer>
    <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login user={user} setUser={setUser}/>} />

          <Route path="/up" element={<Uploads user={user} setUser={setUser} />} />
        
        </Routes>    
      
      </BrowserRouter>
    </MainContainer>
  )
}

export default App;

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
`