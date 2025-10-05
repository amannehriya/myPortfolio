import React from 'react'
import SkillCard from './SkillCard'
// import figma from ''
function Skill() {
    const skillItems = [
        {
            imgsrc:'public/Figma-logo.svg',
            label:'figma',
            desc:'Design Tool'
        }, {
            imgsrc:'public/images/CSS3_logo_and_wordmark.svg',
            label:'css',
            desc:'User Interface'
        }, {
            imgsrc:'public/JavaScript-Symbol.png',
            label:'javaScript',
            desc:'interaction'
        }, {
            imgsrc:'public/images/136-1363736_express-js-icon-png-transparent-png.png',
            label:'Express js',
            desc:'Node Framework'
        }, {
            imgsrc:'public/Mongodb.png',
            label:'Mongo Db',
            desc:'Database'
        }, {
            imgsrc:'public/images/React-icon.svg.png',
            label:'React',
            desc:'Framework'
        }, {
            imgsrc:'public/images/Tailwind_CSS_Logo.svg.png',
            label:'Tailwind-css',
            desc:'User Interface'
        },
    ]
  return (
   <section className='section'>
    <div className="container">

        <h2 className="headline-2 reveal-up">
            Essential Tools I Use
        </h2>
         <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
        Discover the powerful tools and technologies I use to create 
        exceptional , high-performing websits & application.
       </p>

       <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
        {
            skillItems.map(({imgsrc,label,desc},key)=>(
                <SkillCard 
                 key={key}
                imgsrc={imgsrc}
                label={label}
                desc={desc}
                classes="reveal-up"
                />
            ))
        }
       </div>
    </div>
   </section>
  )
}

export default Skill