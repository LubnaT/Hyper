import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import the function from other jsx file 
import Day1 from './Day1'; 
import './index.css';

//any js part inside render is called using{} 
//3 types of defining html using js outside the root and using inside render method 
//1.constant- using constant variable which has value or html tag/component
//2.functions-using js function outside nd calling in render within {}
//3.component function-its function name start with capital letter and can be used either {} or </>

const Thank = 'Thank';
const You =<h6>You</h6>
const root = ReactDOM.createRoot(document.getElementById('root'));

function Me(){
 return <div>
          <h2>Iam Lubna Tahreem</h2>
          <h2>Mtech CSE</h2>
        </div>
    
}
root.render(
  <div>

    
    <h1>Hello Everyone</h1>
    {/* //calling component */}
    <Day1/> 
    {/* calling function */}
    {Me()}
    <Me/>
    {/* calling component fntn from different file */}
    <App/>
    {/* <h2>Iam Lubna Tahreem</h2> */}
    <img class="img" src='https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg' alt='im' />
    <br/>
    <p>Hello Everyone. This is Lubna Tahreem. <br/>
     I started my career with Innovatum as a junior java developer.<br/>
     This changed my life i got to know more about coding and how to learn it easily..<br />
     {/* calling constant */}
     {Thank}{You}
    </p>
   
  </div>

 
);
