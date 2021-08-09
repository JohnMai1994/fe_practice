import React from "react";
import styled from "styled-components";


const SidebarStyle = styled.div`
    background-color: #ffe85e;
    
    // 改进一下，可以使用flex来代替width，
    // 使得所有的子元素都伸展并填充容器，不留空白
    //width: 40%;
    flex: 1;
    margin: 5px;
    padding: 30px 0;
    text-align: center;
    color: white;
    font-weight: bolder;
`



const Sidebar = () => {

    return <SidebarStyle>Sidebar</SidebarStyle>

}

export default Sidebar;