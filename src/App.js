import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {
  const [mode,setmode]=useState('white');
  const togglemode1=()=>{
    if(mode==='light'||'#061f45'||'#198754'){
      setmode('black')
      document.body.style.backgroundColor='black'
    }else{
      setmode('light')
      document.body.style.backgroundColor='white'
    }
  }
  const togglemode2=()=>{
    if(mode==='light'||'black'||'#198754'){
      setmode('#061f45')
      document.body.style.backgroundColor='#061f45'
    }
  }
  const togglemode3=()=>{
    if(mode==='light'||'#061f45'||'black'){
      setmode('#198754')
      document.body.style.backgroundColor='#198754'
    }
  }
  const togglemode4=()=>{
    if(mode==='#198754'||'#061f45'||'black'){
      setmode('white')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    
    <>
     
          <Navbar title="Textutils" about="About us" mode={mode} Togglemode1={togglemode1}Togglemode2={togglemode2}Togglemode3={togglemode3}Togglemode4={togglemode4}/>
          <Textform heading=" Enter the text below"  mode={mode}/>
              
    </>
  );
}

export default App;
