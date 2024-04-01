import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      <input type="checkbox" className='w-5 ml-2  mt-3 h-5 lg:-ml-[293px]' checked={task.completed} onChange={handleToggle} />
      <div className='lg:-ml-[300px]'>
      <p className='w-72 ml-2 md:w-96 lg:w-[1000px] rounded-md p-4 mt-3 mb-3 h-32  overflow-scroll bg-white text-black '>{task.title}</p>
      <button onClick={handleDelete} className="btn ml-2 text-white btn-error">Delete</button>
    </div>
    </li>
  );
};

export default TaskItem;

