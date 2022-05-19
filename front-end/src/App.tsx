import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Upload} from "./components/Upload";

function App() {

  return (<>
    <Header/>
    <div className="container">
      <Upload/>
    </div>
    <Footer/>
  </>);
}

export default App;
