
// /*

// Rules of hooks

// 1.Must be written inside function component
// 2.Must be imported in component
// 3.Must be call at top level of component
// 4.Cannot be conditional



// */
// import './App.css';
// import {React,useState,useEffect} from 'react';
// import { useRef } from 'react';

// function App() {
//   const refElement=useRef("");
//   const [name,setName]=useState("Ishita");
//   console.log(refElement);
//   const [count,setCnt]=useState(0);
//   const [data,setData]=useState("name");
//   useEffect( () =>{
//     console.log("Component mounted");
//   },[])

//   function updateName(){
//     setData("Ishita");
//   }

//   function updateCnt(){
//     setCnt(count+1);
//   }

//   function Reset(){
//     refElement.current.value="";
//     refElement.current.focus();
//   }
//   function handleInput(){
//     refElement.current.style.color="blue";
//     refElement.current.value="Prashant";
//   }
//   return (
//     <div className='App'>
//       <h1>Button Clicked {count} times </h1>
//       <button onClick={updateCnt}>Click</button>
//       <h1>{data}</h1>
//       <button onClick={updateName}>Click to see name</button>

//       <h1>Learning useRef</h1>
//       <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name'></input>
//       <button onClick={Reset}>Reset</button>
//       <button onClick={handleInput}>handleInput</button>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import ColorPicker from './ColorPicker';
import WordCounter from './WordCounter';
import AgeCalculator from './AgeCalculator';

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff','#e59090','#7b9b18'];

  return (
    <div>
      <ColorPicker colors={colors} />
      <WordCounter/>
      <AgeCalculator />
    </div>
    
  );
};

export default App;
