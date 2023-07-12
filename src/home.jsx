import React from 'react';
import './css/App.css'
import ToDoList from './App.jsx'
import Header from './jsx/header.jsx'
import Footer from './jsx/footer'

export default function Home() {
  return (
    <>
        <Header/>
        <ToDoList/>
        <Footer/>

    </>
  );}