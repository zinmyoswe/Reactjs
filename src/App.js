import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (

    <div className="App">
        <Message />
        {/* <Greet name="maymyat" heroName="Batman" />
         <p>This is children props</p>
         <Greet name="nanlay" heroName="Superman"/>
         <button class="btn btn-outline-primary">Actions</button>
         <Greet name="thazin" heroName="Wonder Woman"/>*/}
       {/*  <Welcome /> */}
        {/* <Hello /> */}
    </div>
  );
}

export default App;
