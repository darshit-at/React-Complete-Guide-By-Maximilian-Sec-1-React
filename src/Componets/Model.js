import React from 'react';
import '../App.css'
function Modal(props) {
    return (
        <div class="model">
            <h2>{props.text}</h2>
            <button class="btn" onClick={props.onClose}>Cancel</button>
            <button class="btn" onClick={props.onClose}>Confirm</button>
        </div>
    )
}
export default Modal;