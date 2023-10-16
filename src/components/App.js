import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [para,setPara] = useState('');
    function handlePara(){
        setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
    }
  return (
    <div id="main">
       <button onClick={handlePara} id="click">Click</button>
        <p id="para">{para}</p>
    </div>
  );
}


export default App;
