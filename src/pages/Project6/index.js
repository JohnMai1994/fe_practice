import React from "react";
import styled from "styled-components"
import {keyframes} from "styled-components";

const Project6Style = styled.div`
    background-color: #4c83b6; 
    width: auto;
    height: 100px;
    position: relative;

`

const drift = keyframes`
      0% {left: 0px;}
      49% {left: 940px; opacity: 1;}
      50% {left: 940px; opacity: 0;}
      51% {left: -940px; opacity: 0;} 
      52% {left: -940px; opacity: 1;} 
      100% {left: 0px;} 
`


const Cloud = styled.div`
    width: 125px;
    height: 50px;
    position: absolute;
    background: #fff;
    border-radius: 100px;
    z-index: 1;
    
    top: 40px;
    left: 10px;
    
    :after, :before{
        content: "";
        position: absolute;
        background: #fff;
        z-index: -1;
    }

    :after{
      width: 50px;
      height: 50px;
      top: -15px; 
      left: 60px;
      border-radius: 100px;
    }

    :before{
      width: 60px;
      height: 60px;
      top: -25px; 
      left: 15px;
      border-radius: 200px;
    }
    
    animation: ${drift} 30s linear infinite;
    
    
    
`






const Project6 = () => {

    return <Project6Style>
        <Cloud/>
    </Project6Style>


}


export default Project6;