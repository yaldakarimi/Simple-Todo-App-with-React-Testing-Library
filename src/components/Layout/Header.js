import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-red-500 text-white font-semibold text-2xl py-12 shadow-md'>
      <Link to='/'>
        <h1 className='text-center '>My Awesome Todo App</h1>
      </Link>
    </div>
  );
}
