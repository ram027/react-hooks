// In this we see how we can use useState hook with single arguement

import React,{ useState } from "react";
import './style.css';

const Counter =()=>{
    const [count,setCount]=useState(0);
    return (
        <div className="counter">
            <button className="sub-btn" onClick={()=>{setCount(prevCount=>prevCount-1)}}>-</button>
            <span>{count}</span>
            <button className="add-btn" onClick={()=>{setCount(prevCount=>prevCount+1)}}>+</button>
        </div>
    )
}
export default Counter;