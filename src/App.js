import './App.css';
import Project1 from "./pages/Project1";
import React from "react";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";

function App() {
    return (

        <div>
            <h1>布局</h1>
            <p>目的：使用display里面的flex布局，文字居中使用text-align，自动扩充使用flex: 1 数字代表占百分比</p>
            <Project1/>
            <br/>
            <Project2/>
            <br/>
            <p>目的：使用display里面的grid布局，</p>
            <Project3/>
            <br/>
            <br/>
            {/*<h1>综合</h1>*/}
            {/*<Project4/>*/}

            <h1>搜索框</h1>
                <p>目的：
                </p>
                <p>理解box-sizing: border-box是告诉浏览器设置的边框和内边距的值是包含在width里面的，就是width就是总长度;</p>
                <p> 明白border-radius，调边框圆弧。
                </p>
                <p>点击Input出现黑框，使用outline: none消除</p>

            <Project5/>
            <br/>

            <br/>
            <br/>
            <h1>飘动的云</h1>
            <p>目的：使用Animation, before 和 after，明白position里面 relative和absolut的区别</p>
            <Project6/>


        </div>


    );
}

export default App;
