import React from 'react';
import {useState} from 'react';
import Modal from './Model';
import '../App.css'
function Todo(props) {
    const[showModal,setShowModel]=useState();

    function showModelHandler(){
        props.onClick()
        setShowModel(true);
      
    };
    function closeModelHandler(){
        props.onClick()
        setShowModel(false);
    }
return(

        <div class="card">
        <h2>{props.text}</h2>
        <div class="action">
            <button class="btn" onClick={showModelHandler}>Delete</button>
        </div>
        {showModal && <Modal text='Are you sure?' onClose={closeModelHandler} />} 
    </div>

)
}
export default Todo;