import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/App.css'
import ToDoList from './App.jsx'
import Header from './jsx/header.jsx'
import Social from './jsx/social'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <ToDoList/>
    <Social/>
  </React.StrictMode>,
)
