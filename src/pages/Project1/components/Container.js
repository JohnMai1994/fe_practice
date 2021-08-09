import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

import styled from "styled-components"

const ContainerStyle = styled.div`
    display: flex;
    align-items: center;

`


const Container = () => {

    return (
        <ContainerStyle>
            <Sidebar/>
            <Content/>
        </ContainerStyle>
    )
}

export default Container;