import React from "react";
import { Navigate } from "react-router-dom";

import styled from 'styled-components';

import { tokenLogin } from "../utils";

import { Uploads } from "../content/upload";

export const Home =({user, setUser})=>{

    return(
        <MainContainerDiv>
            {/* {(!user && !localStorage.key('myToken')) && <Navigate to="/"/>}
            {(!user && localStorage.key('myToken')) && async function(setUser){ await tokenLogin(setUser) } } */}
            <Uploads />
        </MainContainerDiv>
    )
}

const MainContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
`