import React from 'react'
import ProjectCard from './ProjectCard';

function Works() {
    const works = [
 
  {
    imgSrc: '/images/project-3.jpg',
    title: 'QuickLift app',
    tags: ['Development', 'API','ride'],
    projectLink: 'https://quicklift-frontend.onrender.com'
  },
 
 
  {
    imgSrc: '/images/project-6.jpg',
    title: 'StackLens',
    tags: ['Web-design', 'Development','Tech-stack'],
    projectLink: 'https://stacklens.onrender.com'
  },
];
  return (
    <section className="section"
    id='work'>
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                 My project heighlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
               {works.map(({imgSrc,title,tags,projectLink},key)=>(
                   <ProjectCard
                   title={title}
                   tags={tags}
                   projectLink={projectLink}
                   imgSrc={imgSrc}
                   classes={"reveal-up"} />
               ))}
            </div>
        </div>
    </section>
  )
}

export default Works