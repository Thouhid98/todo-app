import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), title }));
    setTitle('');
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add task' className='border-2 rounded-lg w-72 p-2 bg-white border-cyan-700'  value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className="btn ml-2 text-white btn-accent">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
