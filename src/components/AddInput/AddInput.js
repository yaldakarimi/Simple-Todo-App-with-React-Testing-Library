import { useState } from 'react';
import { v4 } from 'uuid';

export default function AddInput({ setTodos, todos }) {
  const [todo, setTodo] = useState('');

  const addHandler = () => {
    if (!todo) {
      return;
    }

    let newTask = {
      id: v4(),
      task: todo,
      isCompleted: false,
    };

    setTodos([...todos, newTask]);
    setTodo('');
  };

  return (
    <div className='mb-10 border-2 border-red-600 rounded-md shadow-md p-5 '>
      <form className='flex justify-between'>
        <input
          type='text'
          placeholder='Add a new task here....'
          className='border border-gray-200 p-2 rounded-md w-full'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={addHandler}
          type='button'
          className='bg-red-500 text-white py-2 px-10 rounded-md ml-5 font-semibold hover:bg-red-600 '
        >
          Add
        </button>
      </form>
    </div>
  );
}
