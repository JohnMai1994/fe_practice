import React from "react";
import styled, {keyframes} from "styled-components"


const Project8Style = styled.div`
height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const typing = keyframes`

    from {
      width: 0;
    }
    
    80% {
      width: 37ch;
    
    }
    
    100% {
       width: 37ch;
    }
    
   
    
`

const blink = keyframes`
     50% {
        border-color: transparent
      }

`


const AutoTyping = styled.div`

    width: 37ch;
    animation: ${typing} 5s steps(100) infinite, ${blink} 1s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;

  
`



const Project8 = () => {

    return <Project8Style>
        <AutoTyping>
            Hello World, Welcome to my CSS class!

        </AutoTyping>


    </Project8Style>

}


export default Project8;