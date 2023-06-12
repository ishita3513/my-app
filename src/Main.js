import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


class Main extends Component {
render() {
	return (
	<Router>
		<div className="App">
			<ul className="App-header">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/Contact">Contact Us</Link>
			</li>
            <li>
				<Link to="/Footer">Footer</Link>
			</li>
			</ul>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/Components/Contact' element={< Contact />}></Route>
				<Route exact path='/Components/Footer' element={< Footer />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default Main;
