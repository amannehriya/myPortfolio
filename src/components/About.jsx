import React from 'react'

function About() {
    const aboutItems = [
        {
            label: 'project-done',
            number:5
        },{
            label:'years of experirnce',
            number:1
        }
    ];

  return (
  <section
  id="about"
  className='section'>
    <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
            <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] '>
               Hello! I’m Aman, a web developer passionate about building elegant, responsive,
                and high-performing websites. Blending creativity with technical expertise, 
               I turn ideas into digital experiences that captivate and deliver results.
            </p>

            <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                {
                    aboutItems.map(({label,number},key)=>(
                        <div key={key}>
                            <div className='flex items-center md:mb-2'>
                              <span className='text-2xl font-bold md:text-4xl'>{number}</span>
                              <span className='text-sky-400 font-semibold
                              md:text-3xl'>+</span>
                             </div>
                             <p className='text-sm text-zinc-400'> {label}</p>
                        </div>
                    ))
                }

                <img src="#"
                 alt="logo"
                 width={30}
                 height={30} 
                 className='ml-auto md:w-[40px] md:h-[40px]'/>
            </div>
        </div>

    </div>

  </section>
  )
}

export default About