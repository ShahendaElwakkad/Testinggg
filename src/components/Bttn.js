import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Bttn() {
  return (
    <Link to=''>
      <button className='btn'>Contact Us</button>
    </Link>
  );
}
