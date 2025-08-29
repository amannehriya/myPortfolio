import React from 'react'
import ProjectCard from './ProjectCard';

function Works() {
    const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: '#'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: '#'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: '#'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: '#'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: '#'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: '#'
  },
];
  return (
    <section className="section"
    id='work'>
        <div className="container">
            <h2 className="headline-2 mb-8">
                 My project heighlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
               {works.map(({imgSrc,title,tags,projectLink},key)=>(
                   <ProjectCard
                   title={title}
                   tags={tags}
                   projectLink={projectLink}
                   imgSrc={imgSrc} />
               ))}
            </div>
        </div>
    </section>
  )
}

export default Works