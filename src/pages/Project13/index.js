import React from "react";
import styled, {keyframes} from "styled-components"


const Project13Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    background: #222;


`

const animation = keyframes`
    0% {
        transform: translateX(-1px);
    }
    
    100% {
        transform: translateX(-56px);
    }


`

const Wavy = styled.div`
    position: relative;
    width: 150px;
    height: 50px;
    background: #333;
    overflow: hidden;

    :before {
      content: "aaaaaaaaaa";
      position: absolute;
      top: -52px;
      left: 0;
      color: transparent;
      font-size: 4em;
      text-decoration-style: wavy;
      text-decoration-color: #fff;
      text-decoration-line: underline;
      animation: ${animation} 2s linear infinite;
    }
`



const Project13 = () => {

    return <Project13Style><Wavy/></Project13Style>


}

export default Project13