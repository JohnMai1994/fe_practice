import React from "react";
import styled from "styled-components"

const Project7Style = styled.div`
    width: 90%;
    margin: 40px auto;
    text-align: center;
`


const Button = styled.button`
    margin: 20px;
    width: 130px;
    height: 40px;
    color: ${props => props.color? props.color : "#fff"};
    border-radius: 5px;
    padding: 10px 25px;
    font-family: "Adobe Devanagari", sans-serif;
    font-weight: 500;
    background: transparent;
    cursor:pointer;
    
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
    
    


`

const Style1 = styled(Button)`
    background: rgb(6,14,131);
    background: linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%);
    border: none;
    
    :hover{
        background: rgb(0,3,255);
        background: linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%);
    
    }
`


const Style2 = styled(Button)`
    background: rgb(96,9,240);
    background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
    border: none;

    :hover {
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                  -4px -4px 6px 0 rgba(116, 125, 136, .5), 
        inset -4px -4px 6px 0 rgba(255,255,255,.2),
        inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
    }

`

const Style3 = styled(Button)`
    background: rgb(0,172,238);
    background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
    border: none;
    line-height: 42px;
    padding: 0px;
    
    
    //右上hover的蓝线条
    :before,:after{
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      background: rgba(2,126,251,1);
      transition: all 0.3s ease;
    }
    
    :before {
      height: 0%;
      width: 2px;
    }
    
    :after {
      width: 0%;
      height: 2px;
    }
    
    :hover{
      background: transparent;
      box-shadow: none;
      
      :before {
        height: 100%;
      }
      
      :after {
         width: 100%;
      }
    }
    
    // 左下hover的蓝线条
    span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;

      
      :before, :after{
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background: rgba(2,126,251,1);
        transition: all 0.3s ease;
      }
      
      :before {
        width: 2px;
        height: 0%;
      }
      
      :after {
        height: 2px;
        width: 0%;
      }
      
          
      :hover {
        color: rgba(2,126,251,1); 
        
        :before {
          height: 100%;
        }
        
        :after {
          width: 100%;
        }
        
      }
    }
    
`


const Style4 = styled(Button)`
    background-color: #4dccc6;;
    background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
    border: none;


    
    :before, :after{
        position: absolute;
        content: "";
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
        inset -4px -4px 6px 0 rgba(255,255,255,.9),
        inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
        transition: all 0.3s ease;
    }
    
    :before{
        right: 0;
        top: 0;
        width: 0%;
        height: 0.5px;
    }
    
    :after {
        left: 0;
        bottom: 0;
        width: 0%;
        height: 0.5px;
    }
    
    :hover {
          background-color: #89d8d3;
          background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
          
          :before {
            width: 100%;
                      
          }
          
          :after {
            width: 100%;
          }
    }

`

const Style5 =  styled(Button)`
    border: none;
    transition: all 0.3s ease;
    overflow: hidden;

    
    
    :after {
        position: absolute;
        content: "";
        left: 0px;
        top: 0px;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: #1fd1f9;
        background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
        transition: all 0.5s ease;

    }
    
    
    
    :hover {
        background: transparent;
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
               inset -4px -4px 6px 0 rgba(255,255,255,.5),
              inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
        color: #fff;
        
        :after {
           transform: scale(2) rotate(180deg); 
           box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
                inset -4px -4px 6px 0 rgba(255,255,255,.5),
                inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
        
        }

    
    }



`


const Style6 = styled(Button)`
          position: relative;
          right: 20px;
          bottom: 20px;
          border:none;
          box-shadow: none;
          width: 130px;
          height: 40px;
          line-height: 42px;
          perspective: 230px;
      
      
      :hover {
      
          span {
          
              :nth-child(1) {
          box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
           7px 7px 20px 0px rgba(0,0,0,.1),
           4px 4px 5px 0px rgba(0,0,0,.1);
          -webkit-transform: rotateX(0deg);
          -moz-transform: rotateX(0deg);
          transform: rotateX(0deg);
            }
            
            :nth-child(2) {
              box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
               7px 7px 20px 0px rgba(0,0,0,.1),
               4px 4px 5px 0px rgba(0,0,0,.1);
             color: transparent;
              -webkit-transform: rotateX(-90deg);
              -moz-transform: rotateX(-90deg);
              transform: rotateX(-90deg);
            }
          }
      }
      
      span {
          background: rgb(0,172,238);
          background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
          display: block;
          position: absolute;
          width: 130px;
          height: 40px;
          box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
           7px 7px 20px 0px rgba(0,0,0,.1),
           4px 4px 5px 0px rgba(0,0,0,.1);
          border-radius: 5px;
          margin:0;
          text-align: center;
          box-sizing: border-box;
          transition: all .3s ease;
          
          :nth-child(1){
            box-shadow:
               -7px -7px 20px 0px #fff9,
               -4px -4px 5px 0px #fff9,
               7px 7px 20px 0px #0002,
               4px 4px 5px 0px #0001;
            transform: rotateX(90deg);
            transform-origin: 50% 50% -20px;
          }
          
          :nth-child(2) {
              -webkit-transform: rotateX(0deg);
              -moz-transform: rotateX(0deg);
              transform: rotateX(0deg);
              -webkit-transform-origin: 50% 50% -20px;
              -moz-transform-origin: 50% 50% -20px;
              transform-origin: 50% 50% -20px;
          }
          
      }
`






const Project7 = () => {

    return <Project7Style>

        <Button color={"black"}>Read More</Button>
        <Style1>Read More</Style1>
        <Style2>Read More</Style2>
        <Style3><span>Read More</span></Style3>
        <Style4>Read More</Style4>
        <Style5>Read More</Style5>
        <Style6><span>Click!</span><span>Read More</span></Style6>
    </Project7Style>


}


export default Project7;