import './App.css';
import Project1 from "./pages/Project1";
import React from "react";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";
import Project7 from "./pages/Project7";
import Project8 from "./pages/Project8";
import Project9 from "./pages/Project9";
import Project10 from "./pages/Project10";
import Project11 from "./pages/Project11";
import Project12 from "./pages/Project12";
import Project13 from "./pages/Project13";
import Project14 from "./pages/Project14";
import Project15 from "./pages/Project15";
import Project16 from "./pages/Project16";

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
            <br/>
            <br/>
            <h1>打字显示效果</h1>
            <p>目的：明白使用Animation实现打字效果，注意以下：</p>
            <p>1. 打字动画动画typing，from width:0; steps(n)，文字分成n部分逐渐显示</p>
            <p>2. 打字表闪烁blink, 使用border来设置那个闪烁的点，然后用50%是透明设置动画 </p>
            <p>3. 设置width: 字数ch，一定要设置宽度，不然字不会慢慢打出来，而是一下子全出来</p>
            <Project8/>
            <br/>
            <br/>

            <h1>水滴</h1>
            <p>目的：使用FANCY-BORDER-RADIUS网站做不规则图像border-radius</p>
            <p>1. box-shadow可以多打几层阴影，起到层叠作用。inset是图形内不打阴影</p>
            <p>2. 当要用:after或者:before显示图形，需要有content=""，不然图片不会显示</p>
            <p>3. 感觉布局使用display=flex是最省心省力的</p>
            <Project9/>
            <br/>
            <br/>
            <h1>彩色框</h1>
            <p>目的：使用filter做高斯模糊，理解background和background-color的区别, TranslateY和scale的意思</p>
            <p>1. filter:blur(30px)是用于模糊背景</p>
            <p>2. background(多用)可以设置背景颜色，图片，还有定位，但是background-color(少用)只能设置背景颜色</p>
            <p>3. TranslateY是图形整体向Y轴方向平移，同理TranslateX是向X轴；scale是对图形的大小改变</p>
            <p>4. 不能在:before里面写hover，要在外面写; z-index中:before 《 本层 《 :after</p>
            <Project10/>

            <br/>
            <br/>
            <h1>导航栏动画效果1</h1>
            <p>目的：熟悉ul，li的动画部署，以及去雕ul li的一些样式，了解white-space和overflow</p>
            <p>1. text-decoration重要的关键词：none无下划线，underline有下划线，dotted, wavy, overline是三种下划线的形式，点，波浪，两层</p>
            <p>2. :before里面的content相当于是打背影，使用attr(里面放入关键key)，我也说不清楚，你看一下代码就明白了</p>
            <p>3. white-space中记住两个normal就是连续空白符会合并，换行符会当空白符处理；nowrap就是文本内换行无效；这里如果使用normal，会串行</p>
            <p>4. position中relative是相对于上层div做位置部署，而absolute是相对于第一层</p>
            <p>5. overflow要使用hidden，如果不使用会出现，有个滚动条在动画显示的时候出现</p>
            <Project11/>
            <br/>
            <br/>


            <h1>闪光圈</h1>
            <p>目的：linear-gradient做出渐进效果, 善用:before和:after, 用box-shadow做出发光效果, animation熟悉linear</p>
            <p>1. linear-gradient做出渐层， to top, 选两种颜色，每种颜色选择占百分比</p>
            <p>2. 不同的图形其实是几个图像互相扣出来的, :before和:after</p>
            <p>3. box-shadow: 0 0 5px #51eeee: 代表x偏移0，y偏移0，阴影模糊半径5px，阴影颜色#51eeee</p>
            <p>4. Animation中linear是线性变化，ease-in, ease, ease-in-out, ease-out是动画前后速度不一样, step-start, step-end,
                steps()用于做打字效果 </p>
            <Project12/>


            <h1>波浪</h1>
            <p>目的：使用下划波浪线，来制作波浪效果</p>
            <p>text-decoration-style, text-decoration-color, text-decoration-line这三个来制作下划线的模式</p>
            <Project13/>
            <br/>
            <br/>

            <h1>帅气的卡派</h1>
            <p>1. 了解flex-wrap: wrap, nowrap, wrap-reverse三个的区别, wrap按顺序自动到下一列，nowrap不会跳到下一列，wrap-reverse按反顺序到下一列</p>
            <p>2. 明白为什么width:1280px只能放在Container里面，不能放到Project14Style里面，因为Project14Style外面一层不是flex，不能随便设置宽度</p>
            <p>3. 了解object-fit: contain, cover, fill, none这些参数的区别，contain保持长宽比, fill就是填充，cover保持其宽高比的同时填充元素的整个内容框,
                none保持内容原有尺寸</p>
            <p>4. transform-origin: top,down,left,right...是用于变形后，向不同方向偏移</p>
            <p>5. Styled-component使用:hover使用别的组件时候，用${}，记得组件提前</p>

            <Project14/>

            <br/>
            <br/>
            <h1>登录界面1</h1>
            <p>1. 使用background: 除了颜色, linear-gradient()还有 url, 记得使用${}导入图片,
                背景图用background-size来调整大小；图片用object-fit来调整</p>
            <p>2. letter-spacing是调解文字间距的</p>
            <p>3. input:focus是输入框被点击，input:valid是输入有效, input:invalid是输入无效</p>
            <p>4. border可以写两个，border-bottom划白线，白线宽度 类型（直线波浪线） 颜色</p>
            <Project15/>

            <br/>
            <br/>
            <h1>导航栏动画效果2</h1>
            <p>1. fancy的光影效果，使用text-shadow（对文字使用）box-shadow（对块状使用），0 0 10px 颜色值</p>
            <p>2. 去除li中的原点用text-decoration: none，但是注意要消除ul中的默认的padding值</p>
            <p>3. 做的文字居中的效果，要使用absolute位置，left:50%, top:50%，而且！！！要transform: translate(-50%, -50%)才可以</p>
            <p>4. 除了用opacity改变透明度，也可以用color: rgba(255,255,255,透明度)，前提是你知道那个颜色</p>
            <Project16/>

                <br/>
                <br/>
        </div>


    );
}

export default App;
