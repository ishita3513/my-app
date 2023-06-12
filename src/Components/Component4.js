// import Component3 from "./Component3";

// we did not require to import parent component 
// to get the values of parent component
function Component4(props){
    const role="Trainer";
    const age=19;
    const address="Banglore";
    const arr=[role,age,address];
    const handleClick=()=>{
        return props.getState(arr);
    }
    return(
        <div>
            <h1>Hello {props.x}</h1>
            <h1>Hello {props.arr}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
export default Component4;