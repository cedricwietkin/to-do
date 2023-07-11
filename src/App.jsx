import React, { useState } from 'react';
import './App.css';
function ToDoList() {
  const [todos, setTodos] = useState(['pain', 'chocolat']);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };


  return (
    <>
    <header>
      <h1>My to-do list</h1>
    </header>
    <form>
      <div className="todo">
        <div className='todo_first'>
          <input className="todo_input"
                 type="text"
                 value={newTodo}
                 onChange={handleInputChange}
                 placeholder="Veuillez rentrer un nouvel élément"
          />
            <button className='todo_button' onClick={handleAddTodo}>ajouter</button>
        </div>
        <ul className='list'>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
            className='todo_checkbox'
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
            />
            {todo}
          </li>
        ))}
      </ul>
      </div>
      </form>
    </>
  )
}

export default ToDoList;
