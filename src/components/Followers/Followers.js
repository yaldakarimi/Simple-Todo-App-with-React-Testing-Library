import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { Link } from 'react-router-dom';

export default function Followers() {
  return (
    <div className='px-5'>
      <div className='bg-gray-400 inline-block px-3 py-1 rounded-md text-white mb-5 hover:bg-gray-500'>
        <Link to='/'>Go Home</Link>
      </div>
      <PageHeader title='My Followers' />
    </div>
  );
}
