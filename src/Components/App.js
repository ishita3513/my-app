import React,{Component} from 'react';

class App extends Component{

    render(){
        return(
            <div>
                <h4 style={{color:"#68cf48"}}>MERN </h4>
                <input placeholder='Enter Subject' onChange={this.handleChange}></input>
                <p><b>{this.state.subject}</b>Tutorial</p>
            </div>
        )
    }
}
export default App;