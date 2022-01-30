import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='SignIn'>
      <button className='btn'>Sign In</button>
    </Link>
  );
}
