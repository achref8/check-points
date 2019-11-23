import React from 'react';
import logo from './logo.svg';
import './App.css';

import image from "./logo.png";
const styletitle={
  border: '1px solid black',
  maxWidth:100,
}
function App() {
  return (
    <div style={{styletitle}}> 

    <h1 style={{ color:'red'}} className="title red">My title  </h1>
    



    <img src={image}/>



	<img src="./image1.png" />

    </div>
    
       );
      }
   


export default App;
