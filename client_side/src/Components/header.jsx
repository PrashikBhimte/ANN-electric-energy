import React from 'react';
import axios from 'axios';
import './header.css';

export default function Header() {

  const handleButtonClick = async () => {
    try {
      const response = await axios.get('https://ann-electric-energy-server-side-cdne725w4.vercel.app/report', { responseType : "blob" });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.target = "_blank"
      link.click();
      URL.revokeObjectURL(url);
      console.log('Response Data Type:', typeof response.data);
      console.log('Response Data Length:', response.data.length); 
    } catch (error) {
      console.error('Error fetching PDF:', error.message);
    }
  };

  return (
    <div id='header_div'>
      <button onClick={handleButtonClick}>Download Report File</button>
    </div>
  );
}