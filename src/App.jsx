import React, { useState } from 'react';
import './css/App.css';



function ToDoList() {
  const [todos, setTodos] = useState([
    { value: 'pain', date: '2023-07-10' },
    { value: 'chocolat', date: '2023-07-09' },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo !== '') {
      const newTodoItem = {
        value: newTodo,
        date: new Date().toISOString().split('T')[0],
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    // Handle editing todo item
    console.log('Edit todo:', index);
  };

  const handleDeleteTodo = (index) => {
    // Handle deleting todo item
    console.log('Delete todo:', index);
  };

  return (
    <>
        <div className="todo">
          <div className="todo_first">
            <input
              className="todo_input"
              type="text"
              value={newTodo}
              onChange={handleInputChange}
              placeholder="Veuillez rentrer un nouvel élément"
            />
            <button className="todo_button" onClick={handleAddTodo}>
              ajouter
            </button>
          </div>
          <form>
          <ul className="list">
            {todos.map((todo, index) => (
              <li key={index} className="todo_item">
                <input
                  className="todo_checkbox"
                  type="checkbox"
                  onChange={() => handleCheckboxChange(index)}
                />
                <span className="todo_value">{todo.value}</span>
                <span className="todo_date">{todo.date}</span>
                <div className='todo_iconB'>
                <button
                  className="todo_iconButton"
                  onClick={() => handleEditTodo(index)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  className="todo_iconButton"
                  onClick={() => handleDeleteTodo(index)}
                >
                  <i className="fas fa-trash"></i>
                </button>
                </div>
              </li>
            ))}
          </ul>
          </form>
        </div>
     
    </>
  );
}

export default ToDoList;