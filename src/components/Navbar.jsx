import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function Navbar({navopen}) {
    const lastActiveLink = useRef();
    const activeBox = useRef();
  
   const initActiveBox = ()=>{
   
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';

   }

   useEffect(initActiveBox,[]);
   window.addEventListener('resize',initActiveBox)

   const activeCurrentLink = (event)=>{
  
     lastActiveLink.current?.classList.remove('active');
     event.target.classList.add('active');
     lastActiveLink.current = event.target;

    
     activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
   }
    const navItems = [
        {
            label:'home',
            link:'#home',
            className:'nav-link active',
            ref:lastActiveLink
        },{
            label:'About',
            link:'#about', //#about dalne se jese hi hm about pr click krenge to vo hmko about vale component pr lejayega
            className:'nav-link ',//nut make sure aapne us component ko ek section div me likh kr use id di ho eg:id="work"
        },{
            label:'Work',
            link:'#work',
            className:'nav-link ',
        },{
            label:'Reviews',
            link:'#reviews',
            className:'nav-link ',
        },{
            label:'Contact',
            link:'#contact',
            className:'nav-link md:hidden ',
        }
    ];
  return (
    <nav
    className={'navbar '+ (navopen?'active':'')}>
      {navItems.map(({label,link,className,ref},key)=>(
        <a href={link}
        className={className}
        onClick={activeCurrentLink}
        key={key}
        ref={ref}>
          {label}
        </a>
      ))}
      <div className='active-box'
      ref={activeBox}></div>
    </nav>
  )
}

Navbar.PropTypes = {
  navopen:PropTypes.bool.isRequired
}
export default Navbar