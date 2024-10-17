import React from 'react';
import './responce.css';

export default function Responce() {

    const ok_clicked = async (e) => {

        const divElement = document.getElementById('responce_div');

        if (divElement) {
            divElement.style['display'] = "none";
        } else {
            console.error('Element with ID "myDiv" not found.');
        }

    }

  return (
    <div id="responce_div">
        <div>
            <p id='responce_p'>The predicted energy is : 400.889</p>
            <button onClick={ok_clicked}>OK</button>
        </div>
    </div>
  )
}
