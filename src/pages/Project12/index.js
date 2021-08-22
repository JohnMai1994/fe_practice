import React from "react";
import styled, {keyframes} from "styled-components"


const backgroundColor = "#315"

const Project12Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    background: ${backgroundColor};
    
`

const rotate = keyframes`
     to {
     transform:  rotate(360deg);
     }


`


const FlashRing = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    background: linear-gradient(to top, transparent 40%, #51eeee);
    border-radius: 50%;
    animation: ${rotate} 2s ease-in-out infinite;
    
    :before {
        content: "";
        position: absolute;
        background: ${backgroundColor};
        inset: 20px 20px 0 0;
        border-radius: 50%;
    }
    
    :after {
        content: "";
        position: absolute;
        background: #51eeee;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        top: 50px;
        right: -8px;
        box-shadow: 0 0 5px #51eeee, 0 0 25px #51eeee, 0 0 50px #51eeee, 0 0 75px #51eeee;
    
    }


`



const Project12 = () => {

    return <Project12Style>
        <FlashRing/>
    </Project12Style>


}

export default Project12