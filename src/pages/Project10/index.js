import React from "react";
import styled from "styled-components"

const Project10Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
`

const ColorBox = styled.div`
    position: relative;
    width: 400px;
    height: 250px;
    background: linear-gradient(315deg, #ffec61, #f321d7);

    display: flex;
    align-items: center;
    justify-content: center;
    
    :before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      background: linear-gradient(315deg, #ffec61, #f321d7);
      filter: blur(25px);
      transform: translateY(30px) scale(0.9);
      transition: all 1s ease;
      
     
        
      }
      
       :hover {
          :before{
            transform: translateY(30px) scale(1);
          }
    
    
    }
    
    h2 {
      position: relative;
      color: white;
      font-weight: 400;
    }

`


const Project10 = () => {

    return <Project10Style>
        <ColorBox>
            <h2>
                Gradient Box Shadow
            </h2>
        </ColorBox>
    </Project10Style>


}

export default Project10;