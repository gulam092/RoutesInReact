import React from 'react'
import {useNavigate } from 'react-router-dom';
function Contact() {
    const navigate =  useNavigate();
  return (
    <div>
        <h1>Welcome To My Contact Page</h1>
        <button onClick={()=> navigate(-1)}> Go Back</button>
    </div>
  )
}

export default Contact