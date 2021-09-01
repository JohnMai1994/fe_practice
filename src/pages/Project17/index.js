import React from "react";
import styled from "styled-components";
import pic1 from "./pic1.jpg"
import pic2 from "./pic2.jpg"
import pic3 from "./pic3.jpg"
import pic4 from "./pic4.jpg"
import pic5 from "./pic5.jpg"
import pic6 from "./pic6.jpg"


const Project17Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


const BoxList = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 200px 200px 200px;
    grid-gap: 0px;
  
`

const Blur = styled.div`
    position: absolute;
    top: 300px;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 0,0,0.2 );
    transition: all 0.5s ease;
    cursor: pointer;
    

    
`

const Box = styled.div`
  background: url(${props => props.img});
  background-size: cover;
  grid-column: ${props => props.Column};
  grid-row: ${props => props.Row};
  position: relative;
  overflow: hidden;
  cursor:pointer;
  
   :hover {
        ${Blur} {
            transform: translateY(-300px);
        
        }
   }
  
`




const Text = styled.p`
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      font-weight: 500;
      font-size: 1.35em;
      letter-spacing: 5px;
      transition: 0.5s ease;

`


const Project17 = () => {

    return <Project17Style>
        <BoxList>
            <Box Column={1} Row={1} img={pic1}>
                <Blur>
                    <Text>Hello World</Text>
                </Blur>
            </Box>

            <Box Column={2} Row={1} img={pic2}>
                <Blur>
                    <Text>Hello World</Text>
                </Blur>
            </Box>

            <Box Column={3} Row={1} img={pic3}>
                <Blur>
                    <Text>Hello World</Text>
                </Blur>
            </Box>

            <Box Column={1} Row={2} img={pic4}>
                <Blur>
                    <Text>Hello World</Text>
                </Blur>
            </Box>

            <Box Column={2} Row={2} img={pic5}>
                <Blur>
                    <Text>Hello World</Text>
                </Blur>
            </Box>

            <Box Column={3} Row={2} img={pic6}>
                <Blur>
                    <Text>Hello World</Text>
                </Blur>
            </Box>


        </BoxList>
    </Project17Style>

}

export default Project17;