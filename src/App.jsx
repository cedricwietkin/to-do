import React, { useState } from 'react';
import './App.css'
function ToDoList() {
  const [todos, setTodos] = useState(['Acheter du pain', 'Prendre rendez-vous']);
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
      <div className="todo">
      <input
      className="todo_input"
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Ajouter une tâche"
      />
        <button className='todo_button' onClick={handleAddTodo}>ajouter</button>
        <ul>
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
    </>
  )
}

export default ToDoList;
