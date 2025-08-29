import { Component, useState } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import './App.css'
// import logo from '../public/images/logo'
// Component
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Works from './components/Works'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <ReactLenis root>
     <Header/>
   <main>
    
    <Hero />
    <About />
    <Skill />
    <Works />
    <Reviews />
    <Contact />

   </main>
   <Footer />
    </ReactLenis>
  )
}

export default App
