import React from 'react'
import SkillCard from './SkillCard'

function Skill() {
    const skillItems = [
        {
            imgsrc:'#',
            label:'figma',
            desc:'Design Tool'
        }, {
            imgsrc:'#',
            label:'css',
            desc:'User Interface'
        }, {
            imgsrc:'#',
            label:'javaScript',
            desc:'interaction'
        }, {
            imgsrc:'#',
            label:'Express js',
            desc:'Node Framework'
        }, {
            imgsrc:'#',
            label:'Mongo Db',
            desc:'Database'
        }, {
            imgsrc:'#',
            label:'React',
            desc:'Framework'
        }, {
            imgsrc:'#',
            label:'Tailwind-css',
            desc:'User Interface'
        },
    ]
  return (
   <section className='section'>
    <div className="container">

        <h2 className="headline-2">
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

                imgsrc={imgsrc}
                label={label}
                desc={desc}
                />
            ))
        }
       </div>
    </div>
   </section>
  )
}

export default Skill