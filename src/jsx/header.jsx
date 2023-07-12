import React from 'react';

export default function Header() {
  return (
    <>
      <header>
        <img className='logo' src='/img/To-do.png'></img>
        <h1>My to-do list</h1>
        <a className='contact' href='#'>Contact</a>
        
      </header>
    </>
  );
}