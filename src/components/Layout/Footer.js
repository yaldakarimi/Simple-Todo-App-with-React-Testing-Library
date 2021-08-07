import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-gray-800 px-10 pt-10 pb-5  text-white '>
      <h1 className='mb-5 font-semibold'>My Awesome Todo App</h1>
      <Link to='/about'>About</Link>

      <div className='border-t border-gray-400 mt-10'>
        <p className='text-center text-gray-400 mt-3'>
          Copyright &copy; Awesome Todo App 2021
        </p>
      </div>
    </div>
  );
}
