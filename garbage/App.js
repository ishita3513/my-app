// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import C1 from "./Components/Component.js"
// import Component2 from "./Components/Component2.js"
// import Component3 from "./Components/Component3.js"
// import C2 from "./Components/FunctionalComp.js"
// import C5 from "./Components/Comp5.js"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Home from './Components/Home';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="./Components/Header" element={<Header/>}/>
          <Route path="/Components/Contact" element={<Contact/>}/>
          <Route path="/Components/Footer" element={<Footer/>}/>
          {/* <Route path="/Component2" element={<Component2/>}/>hhtp://localhost:3000/Component1 */}
          {/* <Route path="/Component3" element={<Component3/>}/>hhtp://localhost:3000 */}
          {/* <Route path="/Components/FunctionalComp" element={<C2/>}/>hhtp://localhost:3000 */}
        </Routes>
      </BrowserRouter>
      {/* <C1/>
      <C2/>
      <Component2/>
      <Component3/> */}
      {/* <C5/> */}
    </div>
  );
}

export default App;

