import React,{useState} from "react";
function C2(props){
    const[name,setName]=useState('Ishita');
    // const handleChange=(event)=>{
    //     setName(event.target.value)
    // }
    return(
        <div>
            {/* <input onChange={handleChange}/> */}
            <input onChange={(event)=>setName(event.target.value)}/>
            <h1>The name you entered is {name}</h1>
            {props.name}
        </div>
    )
}
export default C2;

