import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Me(){
 return <div><h2>Iam Lubna Tahreem</h2>
 <h2>Mtech CSE</h2></div>
    
}
root.render(
  <div>

    
    <h1>Hello Everyone</h1>
    {Me()}
    <Me/>
    {/* <h2>Iam Lubna Tahreem</h2> */}
    <img class="img" src='https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg' alt='im' />
    <br/>
    <p>Hello Everyone. This is Lubna Tahreem. <br/>
     I started my career with Innovatum as a junior java developer.<br/>
     This changed my life i got to know more about coding and how to learn it easily.. 
    </p>


  </div>

 
);
