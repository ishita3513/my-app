import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";

function Home(){
    return(
        <div>
            <h1>Home</h1>
            
            <a href="./Component/Header"><Header/></a><br/>
            <a href="./Component/Contact"><Contact/></a><br/>
            <a href="./Component/Footer"><Footer/></a><br/>
            {/* <p>
                <a href="/Header">Header</a>
            </p>
            <p>
                <a href="/Contact">Contact</a>
            </p>
            <p>
                <a href="/Footer">Footer</a>
            </p> */}
        </div>
    )
}
export default Home;