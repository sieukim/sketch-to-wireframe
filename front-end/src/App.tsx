import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Upload} from "./components/Upload";
import {Result} from "./components/Result";
import {DetectionResult} from "./types";

function App() {
  // detection result
  const [result, setResult] = useState<DetectionResult | undefined>(undefined);

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
