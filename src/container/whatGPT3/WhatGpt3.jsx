import React from 'react'
import './WhatGpt3.css';
import Feature from './../../components/feature/Feature.jsx';
export default function WhatGpt3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The Possibilities are beyond your Imaginations</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}
