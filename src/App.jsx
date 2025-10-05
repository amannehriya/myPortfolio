import { Component, useState } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

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


gsap.registerPlugin(useGSAP,ScrollTrigger); // register the hook to avoid React version discrepancies 

function App() {

  useGSAP(()=>{
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element)=>{
gsap.to(element,{
  scrollTrigger:{
    trigger: element,
    scrub:true,
  },
  y:0,
  opacity:1,
  duration:1,
  ease:"power2.out"
})
    })
  })

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
