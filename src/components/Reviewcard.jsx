
import PropTypes from 'prop-types'

  const rating = new Array(5);
    rating.fill({
        icon:'star',
        style:{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48",
    color: "gold"   // you can set star color here}
   } });
    
function Reviewcard({
    content,
    imgsrc,
    name,
    company
}) {
  
  return (
    <div className='bg-zinc-800 p-5 rounded-xl min-w-[320px]
    flex flex-col lg:min-w-[420px]'>

   <div className="flex items-center gap-1 mb-3">
    {rating.map(({icon,style},key)=>(
        <span
        key={key} 
        className="material-symbols-rounded text-yellow-300 text-[18px]"
          style={style}
        >{icon}
        </span>
    ))}
   </div>

   <p className=" text-zinc-400 mb-8">
    {content}
   </p>

  <div className='flex items-center gap-2 mt-auto'>
     <figure className='img-box rounded-lg'>
        <img src={imgsrc}
         alt={name}
         width={44}
         height={44}
         className='img-cover' 
         loading='lazy'/>
     </figure>
     <div className="">
        <p>{name}</p>
        <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
     </div>
  </div>

    </div>
  )
}
Reviewcard.PropTypes = {
    content:PropTypes.string.isRequired,
    imgsrc:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    company:PropTypes.string.isRequired
}

export default Reviewcard