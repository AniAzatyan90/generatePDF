import React, { useState } from 'react';
import UsersList from './page/UsersList';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <div className='w-full bg-blue-300 p-4 flex justify-evenly items-center gap-4'>

      <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png  ' className='h-12'></img>
      <li className='list-none'>Home</li>
      <li className='list-none'>About</li>

      <button
        onClick={toggleModal}
        className='px-10 py-2 bg-blue-600 text-white rounded'
      >
        {isModalOpen ? 'Փակել ցուցակը' : 'Ցուցադրել ցուցակը'}
      </button>

      
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-8 w-full max-w-fill shadow-lg relative'>
            <button
              onClick={toggleModal}
              className='absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold'
            >
              ×
            </button>
            <UsersList />
          </div>
        </div>
      )}
    </div>
  );
}



