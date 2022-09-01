import { React, useState } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { tokenLogin } from "../utils";

import { logout } from "../utils";

export const Uploads =({user, setUser})=>{

    const [file, setFile] = useState();

    const handleChange =(e)=>{
        setFile(e.target.files[0])
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    return(
        
        <MainContainerDiv>
            {(!user && !localStorage.key('myToken')) && <Navigate to="/"/>}
            {(!user && localStorage.key('myToken')) && async function(setUser){ await tokenLogin(setUser) } }
            <LeftContentDiv>
                <InfoContainer>
                    <h1>Uploads</h1>
                    
                    <Paragraph>On this page you can upload files to be stored.</Paragraph>
    
                    <a href="https://github.com/thankinson/tlh_project_fileshare" target="blank">GitHub Repository</a>
                    <hr/>

                    <SubmitButton onClick={() => logout(setUser={setUser})}>Logout</SubmitButton>
                    
                </InfoContainer>
            </LeftContentDiv>
            
            <RightContentDiv>
                <UploadForm onSubmit={handleSubmit}>
                    <h2>Upload Files Here</h2>
                    <InputBox type="file" onChange={handleChange}></InputBox>
                    <hr/>
                    <SubmitButton>Upload File</SubmitButton>
                </UploadForm>
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
    const UploadForm = styled.form`
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
        color: #dedcda;
    `
    const SubmitButton = styled.button`
        width: 200px;
        height: 30px;
        text-align: center;
    `