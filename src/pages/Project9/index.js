import React from "react";
import styled from "styled-components"



const Project9Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;

`

const DropWater = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: transparent;
    border-radius: 35% 65% 57% 43% / 51% 23% 77% 49% ;
    
    box-shadow: inset 10px 10px 10px rgba(0,0,0,0.1),
                inset 20px 30px 10px rgba(0,0,0,0.05),
                15px 25px 10px rgba(0,0,0,0.11),
                15px 25px 20px rgba(0,0,0,0.05),
                inset -10px -10px 15px rgba(255,255,255,1);
                
    :before {
        content: "";
        position: absolute;
        top: 15px;
        left: 25px;
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 71% 29% 37% 63% / 53% 42% 58% 47% ;
    
    }
        
    :after {
        content: "";
        position: absolute;
        top: 10px;
        left: 55px;
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius:62% 38% 37% 63% / 65% 30% 70% 35% ;
    
    }
    
    :hover {
        box-shadow: inset -10px -10px 10px rgba(0,0,0,0.05), -15px -25px 10px rgba(0,0,0,0.1);
    
    }
    


`



const Project9 = () => {

    return <Project9Style>
        <DropWater>

        </DropWater>
    </Project9Style>

}

export default Project9;