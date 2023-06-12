import React,{useEffect,useState} from "react";
import Axios from 'axios';
function Component2(props){
    const [data,setData]=useState([]);
    useEffect(()=>{
        //npm install axios
        //get-read //post-creat //put-update //delete-delete
        //promise
        Axios.get('https://dummyjson.com/products')
        .then((res)=>{
            if(res.status===200){
                setData(res.data.products);
            }
            else{
                Promise.reject();
            }
            })
        .catch((err)=>{
            alert(err)
        })
    },[])
    return(
        <div>
            <ol>{(data.map((val,ind)=>{
                return <li key={ind}>{val.title}</li>
            }))}                
            </ol>
        </div>
    )
}
export default Component2;