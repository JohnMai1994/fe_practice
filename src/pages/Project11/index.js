import React from "react";
import styled, {keyframes} from "styled-components"

const Project11Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    background: #1c234a;


`


const typing = keyframes`

    0% {
        width: 400px;
    
    }
    
    100% {
    
        width: 0;
    }


`


const typingTwo = keyframes`

    0% {
        width: 0;
    
    }
    
    100% {
    
        width: 400px;
    }


`

const List = styled.ul`
    position: relative;
    
    
    :hover {
        li{
          a{
            :before{
               animation: ${typing} 0.5s steps(11) forwards;

            }

          }
          
          :hover {
            a{
              :before {
                animation: ${typingTwo} 1s steps(11) forwards;
              
              }
            }
            
            span {
              color: #ef0448;
            }
            
          }
        }
    }

`


const ListItem = styled.li`
    list-style: none;
    margin: 0 20px;
    font-size: 4em;
    
    
    a {
        position: relative;
        color: rgba(255,255,255,0.1);
        text-decoration: none;
        
        :before {
            //高亮代码在这里
            content: attr(data-text);
            //高亮代码在这里
            position: absolute;
            top: 0;
            color: #1bfaad;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    
    span {
      position: relative;
      top: -2px;
      left: -10px;
      color: transparent;
      
     
    
    }
    
`


const Project11 = () => {

    return <Project11Style>
        <List>
            <ListItem><span>&times;</span><a href="#" data-text="Home">Home</a></ListItem>
            <ListItem><span>&times;</span><a href="#" data-text="About">About</a></ListItem>
            <ListItem><span>&times;</span><a href="#" data-text="Services">Services</a></ListItem>
            <ListItem><span>&times;</span><a href="#" data-text="Our Team">Our Team</a></ListItem>
            <ListItem><span>&times;</span><a href="#" data-text="Contact Us">Contact Us</a></ListItem>
        </List>


    </Project11Style>


}

export default Project11