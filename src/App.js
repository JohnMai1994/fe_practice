import './App.css';
import Project1 from "./pages/Project1";
import React from "react";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";
import Project7 from "./pages/Project7";

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
            <h1>飘动的云</h1>
            <p>目的：使用Animation, before 和 after，明白position里面 relative和absolut的区别</p>
            <Project6/>
            <br/>
            <br/>
            <h1>按钮组合</h1>
            <p>目的：使用transition，明白几个参数的含义, outline是突出边框的部分，巧妙利用:before和:after做特效</p>
            <p>Style3: :before和:after在hover要出现效果，必须使用content=""; transition中的ease是动作效果前慢中快后慢；需要多个特效，可以添加span来包裹</p>
            <p>Style5: :before和:after的默认层数是比text高的，所以要用z-index调整覆盖层数；有些效果不好直接操作button，可以使用:after和:before替代</p>

            <Project7/>



        </div>


    );
}

export default App;
