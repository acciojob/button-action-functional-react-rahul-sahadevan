
import React,{useState} from "react";

function Button(){
    let [para,setPara] = useState('');
    function handlePara(){
        setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
    }
    return (
        <>
        <button onClick={handlePara} id="click">Click</button>
        <p id="para">{para}</p>
        </>
    )
}
export default Button;