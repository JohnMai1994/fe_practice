import React from "react";
import styled from "styled-components";



const FirstLineStyle = styled.div`
    background-color: #008101;
    width: 100%;
     height: 60px;
    margin: 5px ;

`


const SecondLineStyle = styled.div`
    background-color: #1700fe;
    width: 100%;
    height: 60px;
    margin: 5px ;
`


const ThirdLineStyle = styled.div`
    background-color: #820081;
    width: 100%;
     height: 60px;
    margin: 5px ;
`

const Project2 = () => {

        return (
           <div>
               <FirstLineStyle></FirstLineStyle>
               <SecondLineStyle></SecondLineStyle>
               <ThirdLineStyle></ThirdLineStyle>

           </div>

        )
}

export default Project2;