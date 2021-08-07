import { Link } from 'react-router-dom';

export default function TodoFooter({ todos }) {
  return (
    <div>
      <div className='bg-red-500 text-white font-semibold px-5 py-3 rounded-md shadow-md '>
        <p>
          {todos.length} {todos.length === 1 ? 'task' : 'tasks'} left!
        </p>
      </div>

      <div className='border-2 border-gray-500 inline-block px-6 py-2 rounded-md font-semibold text-gray-600 float-right mt-10 hover:text-white hover:bg-gray-500 mb-10'>
        <Link to='/followers'>Followers</Link>
      </div>
    </div>
  );
}
