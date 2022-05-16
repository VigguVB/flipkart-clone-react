import React from 'react';
import './navigationButton.css'
function NavigationButton(props) {
    return (
        <button onClick={props.onClick} className='proInfo'>{props.name}</button>
    );
}

export default NavigationButton;