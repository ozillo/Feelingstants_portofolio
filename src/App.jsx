import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'


const App = () => {
  return (
    <>
    <Header/>
    <main>
    <Home/>
    </main>
    <Footer/>
    </>
  )
}

export default App
