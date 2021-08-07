import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className='container mx-auto mt-10'>
      <div className='px-5'>
        <div className='bg-gray-400 inline-block px-3 py-1 rounded-md text-white mb-5 hover:bg-gray-500'>
          <Link to='/'>Go Home</Link>
        </div>
        <PageHeader title='About' />
        <p className='font-medium'>
          This is a simple Todo App which also has been fully tested using React
          Testing Library
        </p>
        <p className='mt-5 text-gray-500'>Version: 1.0.0</p>
      </div>
    </div>
  );
}
