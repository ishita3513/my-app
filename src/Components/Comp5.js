import React,{useState} from "react";

const Comp5=()=>{
    const state=useState();
    const[count,setCount]=useState(0);
    const IncNum=()=>{
        setCount(count+1);
    };
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click me</button>
        </div>
    )

};
export default Comp5;