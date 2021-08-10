import React from "react";
import styled from "styled-components"

const TopBarStyle = styled.div`
      background-color: #eeeeee;
      padding: 5px 30px;
      display: flex;

`

const Text = styled.div`
    color: #8d8c8b;
    flex: ${props => props.inputNum };
    text-align: ${props => props.position || "center"};
`



const TopBar = () => {

    return <TopBarStyle>
        <Text inputNum={15} position="left">首页</Text>
        <Text inputNum={1}>我的订单</Text>
        <Text inputNum={1}>收藏夹</Text>
        <Text inputNum={1}>登录</Text>
        <Text inputNum={1}>注册</Text>
    </TopBarStyle>


}

export default TopBar;
