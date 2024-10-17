import React, {useState} from 'react';
import axios from 'axios';
import './form.css';

export default function Form() {
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [param3, setParam3] = useState('');
  const [param4, setParam4] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paragraphElement = document.getElementById('responce_p');

    var body = {
      "AT" : parseInt(param1),
      "V" : parseInt(param2),
      "AP" : parseInt(param3),
      "RH" : parseInt(param4)
    }
    try {
      const response = await axios.post('https://ann-electric-energy-server-side-cdne725w4.vercel.app/', body);

      const newText = "The predicted energy is : " + response.data['predictedValue'];

      console.log(newText)

      if (paragraphElement) {
        paragraphElement.textContent = newText;
      } else {
        console.error('Element with ID "response_p" not found.');
      }

      const divElement = document.getElementById('responce_div');

      if (divElement) {
        divElement.style['display'] = "flex";
      } else {
        console.error('Element with ID "myDiv" not found.');
      }
    } catch (error) {
      console.error('Error making API request:', error.message);
    }
  };

  return (
    <form id='form' onSubmit={handleSubmit}>
      <label>AT :
      <input type="text" value={param1} onChange={(e) => setParam1(e.target.value)} />
      </label>
      <label>V :
      <input type="text" value={param2} onChange={(e) => setParam2(e.target.value)} />
      </label>
      <label>AP :
      <input type="text" value={param3} onChange={(e) => setParam3(e.target.value)} />
      </label>
      <label>RH :
      <input type="text" value={param4} onChange={(e) => setParam4(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
