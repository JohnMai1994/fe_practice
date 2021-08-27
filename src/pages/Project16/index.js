import React from "react";
import styled from "styled-components";


const Project16Style = styled.div`

    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #212121;
    


`


const List = styled.ul`
    padding: 0;
    

`

const Item = styled.li`
    list-style: none;
    
    a{
        position: relative;
        display: block;
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
        font-weight: 700;    
        font-size: 4em;
        transition: 0.5s;
        transition-delay:0.5s;

    

        
        :before {
            content: attr(data-text);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            
            text-align: center;
            
            font-size: 0.35em;
            color: #3bffe8;
            text-shadow: 0 0 10px #3bffe8, 0 0 25px #3bffe8,0 0 75px #3bffe8;
            font-weight: 500;
            letter-spacing: 40px;
            white-space: nowrap;
            opacity: 0;
            transition: 0.5s;
            
        }
        
        :hover {
        transition-delay: 0s;
           color: rgba(255,255,255,0.1);
            
            :before {
                opacity: 1;
                letter-spacing: 6px;
            
            }
            
           
        }
    }

    
    

    
   

`


const Project16 = () => {
    return <Project16Style>
        <List>
            <Item><a href="#" data-text={"Home"}>Home</a></Item>
            <Item><a href="#" data-text={"Products"}>Products</a></Item>
            <Item><a href="#" data-text={"Contact"}>Contact</a></Item>
            <Item><a href="#" data-text={"About"}>About</a></Item>
            <Item><a href="#" data-text={"Fees"}>Fees</a></Item>
        </List>
    </Project16Style>


}

export default Project16;