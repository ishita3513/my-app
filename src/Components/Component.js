import {Component} from "react";

class C1 extends Component{
    //1)
    // constructor(){
    //     super();
    //     this.state={check:true}
    // }
    // handleClick=()=>{
    //     this.setState({
    //         check:!this.state.check
    //     })
    // }
    // render(){
    //     const a=(this.state.check)?(
    //                                 <div>
    //                                     <h1>Hello</h1>
    //                                     <p>Search for the keywords to learn more about each error.
    //                                         Warning in [eslint]
    //                                     </p>
    //                                     <button onClick={this.handleClick}>Read More</button>
    //                                 </div>):(
    //                                     <div>
    //                                         <h1>This is not true section...</h1>
    //                                     </div>
    //                                 );
    //     return (
    //         <div>
    //             <h1>Welcome to MERN</h1>
    //             <p>a</p>
    //         </div>
    //     )
    // }

    //2)
    constructor(){
        super();
        this.state={name:'Ishita'}
    }
    handleChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    render(){
        return(
            <div>
                <input onChange={this.handleChange}/>
                <h1>The name you typed is {this.state.name}</h1>
            </div>
        )
    }
}
export default C1