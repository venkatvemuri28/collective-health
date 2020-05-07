import React from 'react';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <h1>Hello CodeSandbox & Git hub</h1>
      <h2>Start editing to see some magic happen! From visual studio</h2>
    </div>
  );
}

export const avg = (arr) => arr.reduce((a, c) => a + c) / arr.length;
