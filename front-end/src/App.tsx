import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Upload} from "./components/Upload";
import {Result} from "./components/Result";

function App() {
  // detection result
  const [result, setResult] = useState<JSON | undefined>(undefined);

  return (<>
    <Header/>
    <div className="container">
      <Upload setResult={setResult}/>
      <Result result={result}/>
    </div>
    <Footer/>
  </>);
}

export default App;
