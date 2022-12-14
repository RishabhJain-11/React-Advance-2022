import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
    {/* <h1>{firstValue}</h1>
    <h1>Value: {secondValue}</h1> */}
    <h1>{text || firstValue}</h1>
    {text && <h1>Hello</h1>}
  </>;
};

export default ShortCircuit;


/**
 * useEffect - Basics (4:47:27)
 * 
 * 
 */

/**
 * Web
 * Android
 * Design
 */

/**
 * Skills
 * Education
 * Projects
 * Open Source
 * Achievements
 */