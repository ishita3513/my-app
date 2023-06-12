import { useState } from "react";
import Component4 from "./Component4";

//Component3 is parent
//Component4 is child
//we can access the child component with importing
function Component3(){
    const name="Shankar";
    // const age=27;
    // const address="Hydrabad";
    // const arr=[name,age,address];

    //props.x
    
    const [data,setData]=useState([]);
    const[p_role,p_age,p_address]=data;
    const getState=(childValue)=>{
        setData(childValue);
        p_role=childValue[0];
        console.log("role from parent",p_role);
        console.log(p_role,p_age,p_address);
    }
    return(
        <div>
            <Component4 x={name} getState={getState}/>
        </div>
    )
}
export default Component3;