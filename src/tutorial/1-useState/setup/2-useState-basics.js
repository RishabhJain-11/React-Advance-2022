import React, { useState } from 'react';

/**
 * Hooks Basics
 * use
 * component must be uppercase
 * must be in the function/component body
 * cannot call conditionally
 */
const UseStateBasics = () => {
  const [text, setText] = useState('random title')

  const handleClick = () => {
    setText("Hello World");
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>
      Change Title
    </button>
  </React.Fragment>; 
};

export default UseStateBasics;
