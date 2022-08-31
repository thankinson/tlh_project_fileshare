import { React, useState } from "react";
import { Navigate } from "react-router-dom";

import styled from "styled-components";

import { userLogin } from "../utils";

export const Login =({user, setUser})=>{
    const [userName, setUserName] = useState();
    const [pass, setPass] = useState();

    const handleSubmit =(e)=>{
        e.preventDefault();
        userLogin(userName, pass, setUser)
    }



    return(
        
        <MainContainerDiv>
         {user && <Navigate to="/up" />}
            <LeftContentDiv>
                <InfoContainer>
                    <h1>Welcome!</h1>
                    <h2> To my file share Site</h2>
                    <Paragraph>This site is intended for portfolio use only.</Paragraph>
                    {/* <Paragraph>Login details<br/> user name: guest <br/>password: password.</Paragraph> */}
                    <a href="https://github.com/thankinson/tlh_project_fileshare" target="blank">GitHub Repository</a>
                    
                </InfoContainer>
            </LeftContentDiv>
            
            <RightContentDiv>
                <LoginForm onSubmit={handleSubmit}>
                    <h2>Login Here</h2>
                    <InputBox type="text" placeholder="Enter User Name" onChange={(e)=> setUserName(e.target.value)}></InputBox>
                    <hr/>
                    <InputBox type="password" placeholder="Enter Password" onChange={(e)=> setPass(e.target.value)}></InputBox>
                    <hr/>
                    <SubmitButton>Log In</SubmitButton>
                </LoginForm>
            </RightContentDiv>
        </MainContainerDiv>
    )
}

const MainContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: space-evenly;
    align-items: center;
    width: 95vw;
    height: 90vh;
    /* border: solid 1px red; */
    background-color: #133B5C;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px ;
`
const LeftContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 45vw;
    height: 85vh;
    /* border: solid 1px white; */
`
    const InfoContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 20vw;
        height: 60vh;
        /* border: solid 1px green; */
        border-radius: 10px;
        background-color: #1E5F74;
        box-shadow: 0px 0px 5px 0px ;
    `
    const Paragraph = styled.p`
        text-align: center;
        padding-left: 10px;
        padding-right: 10px;
    `
const RightContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 45vw;
    height: 85vh;
    /* border: solid 1px white; */
`
    const LoginForm = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 20vw;
        height: 60vh;
        /* border: solid 1px green; */
        border-radius: 10px;
        background-color: #1E5F74;
        box-shadow: 0px 0px 5px 0px ;
    `
    const InputBox = styled.input`
        width: 200px;
        height: 30px ;
        text-align: center;
    `
    const SubmitButton = styled.button`
        width: 200px;
        height: 30px;
        text-align: center;
    `