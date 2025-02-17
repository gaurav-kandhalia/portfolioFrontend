import React from 'react';
import Navbar from '../components/Navbar'


const Header = () => {
  return (
    <>
      <div className='flex justify-between'>
      <header className="  m-0 p-1">
        <h1 className=" text-xl sm:text-4xl font-bold text-white"><span className='text-customPurple'>&lt;</span>Gaurav <span className='text-customPurple'>/&gt;</span></h1>
      </header>
      <nav className=' sm:p-1 flex justify-center items-center font-bold '>
      <Navbar />
      </nav>
      </div>
    </>
  );
};



export default Header;
