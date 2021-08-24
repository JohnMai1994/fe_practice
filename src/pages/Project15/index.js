import React from "react";
import styled from "styled-components";
import backgroundImg from "./bg.jpg"

const Project15Style = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(${backgroundImg}) ;
    background-size: cover;
    



`

const Box = styled.div`
    width: 400px;
    background: rgba(0,0,0,0.8);
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0,0,0,0.8) ;
    //box-sizing: border-box;
    
    h2{
      margin: 0 0 30px;
      padding: 0;
      color: #fff;
      text-align: center;
    
    }
    
`


const Form = styled.form`



`

const InputBox = styled.div`
    position: relative;
    
    
    input{
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
                letter-spacing: 1px;
    
    }
    
    label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
        letter-spacing: 1px;
    
    }
    
    input:focus ~ label, 
    input:valid ~ label  {
        top: -18px;
        left: 0;
        color: #03a9f4;
        font-size: 12px;
    }

`

const Submit = styled.button`
background: #03a9f4;
color: #fff;
border-radius: 5px;
width: 100%;
padding: 10px 0;
    border: none;
    outline: none;
    cursor: pointer;
    


`


const Project15 = () => {

    return <Project15Style>
        <Box>
            <h2>Login</h2>
            <Form>
                <InputBox>
                    <input type="text" name={""} required/>
                    <label htmlFor="">Username</label>
                </InputBox>

                <InputBox>
                    <input type="password" name={""} required/>
                    <label htmlFor="">password</label>
                </InputBox>
                <Submit type="submit" name={"submit"} value={""}>Submit</Submit>
            </Form>

        </Box>


    </Project15Style>

}

export default Project15;