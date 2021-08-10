import React from "react";
import styled from "styled-components"
import logo from "./pic/文字标透明.png"

const SearchBarStyle = styled.div`
    padding: 30px;
    display: flex;

`

const Logo = styled.img`
    width: 300px;
    height: 50px;
    border: none;
    
`

const Search = styled.div`


`

const SearchInput = styled.input`

    padding: 8px;
    width: 500px;
    font-size: 17px;
    height: 32px;
    border: 1px solid #dd182d;
`

const SearchBtn = styled.button`
    padding: 8px;
    background-color: #dd182d;
    margin-top: 5px;
    color: white;
    font-size: 17px;
    border: 1px solid  #dd182d;
    cursor: pointer;
    width: 150px;
    height: 53px;
    box-sizing: border-box;
    

`

const cart = styled.div`

`


const SearchBar = () => {

    return <SearchBarStyle>
        <Logo src={logo} alt=""/>
        <Search>
            <form action="">
                <SearchInput type="text" placeholder="你好" name="search"/>
                <SearchBtn type="submit">提交</SearchBtn>

            </form>

        </Search>

    </SearchBarStyle>


}

export default SearchBar;
