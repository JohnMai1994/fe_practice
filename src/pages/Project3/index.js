import React from "react";
import styled from "styled-components"


const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px;
    grid-gap: 5px;

`

const BoxA = styled.div`
    background-color: #00e193;
  grid-column: 1;
  grid-row: 1;
  
  // 文字部分
  display: grid;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;
  

`

const BoxB = styled.div`
    background-color: #ea9500;
      grid-column: 2;
  grid-row: 1;
  
    display: grid;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;

`

const BoxC = styled.div`
  background-color: #81df00;
      grid-column: 2 / 4;
    grid-row: 2 /4 ;
    
      display: grid;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;

`

const BoxD = styled.div`
background-color: #ad00e8;
     grid-column: 3;
  grid-row: 1;
  
    display: grid;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;


`

const BoxE = styled.div`
background-color: #f4009e;
         grid-column: 1;
  grid-row: 2;
  
    display: grid;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;

`

const BoxF = styled.div`
background-color: #009be2;
         grid-column: 1;
  grid-row: 3;
  
    display: grid;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;

`


const Project3 = () => {

    return (
        <Box>
            <BoxA>A</BoxA>
            <BoxB>B</BoxB>
            <BoxC>C</BoxC>
            <BoxD>D</BoxD>
            <BoxE>E</BoxE>
            <BoxF>F</BoxF>
        </Box>


    )


}

export default Project3;