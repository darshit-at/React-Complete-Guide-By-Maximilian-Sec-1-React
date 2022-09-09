import React, { useState } from 'react';
import Todo from './Todo';
import '../App.css';


function AllComponets() {
    const[bodyBackGround,setBodyBackground]=useState('rgb(200, 203, 203)');
    
    function changeBackGround() {
        if(bodyBackGround!=='rgba(0,0,0,0.5)'){
            setBodyBackground('rgba(0,0,0,0.5)');
        }
        else {
            setBodyBackground('rgb(200, 203, 203)');
        }
    }
    return(
        <div className='container' style={{background:bodyBackGround}}>
         
         <h1>My Todos</h1>
         <Todo text="Learn React" onClick={changeBackGround}/> 
        </div>
    )
};
export default AllComponets;