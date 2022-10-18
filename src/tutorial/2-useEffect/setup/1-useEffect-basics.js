import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Call Effect");
  });
  console.log('Render Component');
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>
      Click Me
    </button>
  </>;
};

export default UseEffectBasics;

// 70 rallies - 35 days
// 70 Jansabha - 35 days
// 10 : 140