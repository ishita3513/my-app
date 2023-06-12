
/*

Rules of hooks
1.Must be written inside function component
2.Must be imported in component
3.Must be call at top level of component
4.Cannot be conditional

*/
import './App.css';
import {React,useState} from 'react';


function App() {
  const [count,setCnt]=useState(0);
  function updateCnt(){
    setCnt(count+1);
  }
  return (
    <div className='App'>
      <h1>Button Clicked {count} times </h1>
      <button onCLick={updateCnt}>Click</button>
    </div>
  );
}

export default App;

