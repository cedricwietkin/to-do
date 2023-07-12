import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/App.css'
import ToDoList from './App.jsx'
import Header from './jsx/header.jsx'
import Footer from './jsx/footer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <ToDoList/>
    <Footer/>
  </React.StrictMode>,
)
