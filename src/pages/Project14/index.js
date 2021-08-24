import React from "react";
import styled from "styled-components"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Project14Style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    
`

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1280px;
    flex-wrap: wrap;

`

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 30px;
    transform: translateY(100%);


`


const ImgBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    border-radius: 20px;
    z-index: 10000;
    transform-origin: top;
    overflow: hidden;
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    
    }
    
`


const Card = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    background: linear-gradient(#2196f4, #2196f4 30%,#1d3448 30%, #1d3448);
    border-radius: 20px;
    margin: 10px;
    overflow: hidden;
    transition: 0.5s;
    
    :hover {
        ${Content} {
          transform: translateY(0);
        
        }
        
        ${ImgBox} {
           transform: scale(0.5) translateY(30px);
        }
    
    }
    
`




const Details = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    
    h2 {
        color: #fff;
        font-size: 1.2em;
        font-weight: 400;
        
        span {
            font-size: 0.8em;
            font-weight: 400;
            color: #2196f3;
        }
    
    }


`

const SocialIcons = styled.ul`
    position: relative;
    display: flex;
    margin-top: 5px;
    padding: 0;

`

const Icon = styled.li`
    list-style: none;
    margin: 4px;
    
    a {
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #294d69;
      border-radius: 50%;
      font-size: 1.5em;
      color: #fff;
      text-decoration: none;
      transition: 0.5s;
      
      :hover {
          transform: rotate(360deg);
      
      }
    }

`




const Project14 = () => {


    return <Project14Style>
        <Container>
            <Card>
                <ImgBox>
                    <img src={img1} alt=""/>
                </ImgBox>
                <Content>
                    <Details>
                        <h2>John Mai <br/><span>Junior Developer</span></h2>
                        <SocialIcons>
                            <Icon><a href=""><FontAwesomeIcon icon={faFacebook} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faTwitter} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faInstagram} /></a></Icon>
                        </SocialIcons>
                    </Details>
                </Content>
            </Card>
            <Card>
                <ImgBox>
                    <img src={img2} alt=""/>
                </ImgBox>
                <Content>
                    <Details>
                        <h2>John Mai <br/><span>Junior Developer</span></h2>
                        <SocialIcons>
                            <Icon><a href=""><FontAwesomeIcon icon={faFacebook} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faTwitter} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faInstagram} /></a></Icon>
                        </SocialIcons>
                    </Details>
                </Content>
            </Card>
            <Card>
                <ImgBox>
                    <img src={img3} alt=""/>
                </ImgBox>
                <Content>
                    <Details>
                        <h2>John Mai <br/><span>Junior Developer</span></h2>
                        <SocialIcons>
                            <Icon><a href=""><FontAwesomeIcon icon={faFacebook} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faTwitter} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faInstagram} /></a></Icon>
                        </SocialIcons>
                    </Details>
                </Content>
            </Card>
            <Card>
                <ImgBox>
                    <img src={img4} alt=""/>
                </ImgBox>
                <Content>
                    <Details>
                        <h2>John Mai <br/><span>Junior Developer</span></h2>
                        <SocialIcons>
                            <Icon><a href=""><FontAwesomeIcon icon={faFacebook} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faTwitter} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></Icon>
                            <Icon><a href=""><FontAwesomeIcon icon={faInstagram} /></a></Icon>
                        </SocialIcons>
                    </Details>
                </Content>
            </Card>
        </Container>


    </Project14Style>
}

export default Project14