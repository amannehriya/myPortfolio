import { ButtonPrimary } from "./Button";


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];
 
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/amannehriya'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aman-nehriya-a171a2337'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/amannehriya'
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/'
  }
];
function Footer() {
  return (
 <footer className='section'>
  <div className="container ">

    <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
 <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
            Let&apos;s work together
        </h2>
        <ButtonPrimary 
        href="#"
        label="Start project"
        icon="chevron_right"/>
          </div>
       

           <div className="grid grid-cols-2 gap-4 lg:pl-20">
        
        <div>
            <p className="mb-2">sitemap</p>
            <ul>
                {sitemap.map(({label,href},key)=>(
             <li key={key}>
                <a
              href={href}
              className="block text-sm text-zinc-400 py-1 transition-colors
              hover:text-zinc-200"
              >{label}</a>   
             </li>
                ))}
            </ul>
        </div>

        <div>
            <p className="mb-2">Socials</p>
            <ul>
                {socials.map(({label,href},key)=>(
             <li key={key}>
                <a
              href={href}
              target="_blank"
              className="block text-sm text-zinc-400 py-1 transition-colors
              hover:text-zinc-200"
              >{label}</a>   
             </li>
                ))}
            </ul>
        </div>

           </div>
    </div>
   
     <div className="flex items-center justify-between pt-10 mb-8">
  <a href="">
    <figure>
      <img src="#" 
      width={40}
      height={40}
      alt="logo" />
    </figure>
  </a>

  <p className="text-zinc-300 text-sm">aman-nehriya</p>
     </div>
   
  </div>
 </footer>
  )
}

export default Footer