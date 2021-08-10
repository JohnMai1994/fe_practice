import React from "react";
import styled from "styled-components"

const Project5Style = styled.div`
    background-color: #a3d0c3;
    padding: 30px 150px;

`

// const SearchBarFrom = styled.div`
//     position: relative;
//     width: 300px;
//     margin: 0 auto;
//
// `

const SearchBarInput = styled.input`
    box-sizing: border-box;
    
    background-color: #f9f0da;
    color: #9E9C9C;
    width: 500px;
    height: 42px;    
    outline: none;
    padding-left: 13px;
    border: 2px solid #7BA7AB;
    
`

const SearchBarBtn = styled.button`
    box-sizing: border-box;
    border: none;
    outline: none;
    height: 42px;
    width: 200px;
    cursor: pointer;
    position: absolute;
    background-color: #7BA7AB;
    border-radius: 0 5px 5px 0;
    color: #f9f0da;
    
`

const Project5 = () => {

    return <Project5Style>
        <form>
            <SearchBarInput type="text" placeholder={"请输入您要搜索的内容。。。"}/>
            <SearchBarBtn type="submit">搜索</SearchBarBtn>
        </form>
    </Project5Style>




}

export default Project5