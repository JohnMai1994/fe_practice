import './App.css';
import Project1 from "./pages/Project1";
import React from "react";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";


function App() {
    return (

        <div>
            <h1>布局</h1>
            <Project1/>
            <br/>
            <br/>
            <br/>
            <Project2/>
            <br/>
            <br/>
            <br/>
            <Project3/>
            <br/>
            <br/>
            <h1>综合</h1>
            {/*<Project4/>*/}

            <h1>搜索框</h1>
            <Project5/>
        </div>


    );
}

export default App;
