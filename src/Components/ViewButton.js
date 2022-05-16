import React from 'react';
import './ViewButton.css'
function ViewButton(props) {
    return (
        <button onClick={props.onClick} className='viewbtn'>{props.name}</button>
    );
}

export default ViewButton;