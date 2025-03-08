import {React, useState} from 'react'
import { Link } from 'react-router-dom';

// passing the image compoenent and destructuring it to other datas
export default function GalleryCard({image}) {
// this is a card that will contain an image and some text with it and the text will be initially hidden using the textVisibility state but when i hover over the card the text shows the images becomes smaller
    const [textVisibility, setTextVisibility] = useState('hidden h-0');
  return (
    <Link className='w-[20rem] rounded-xl overflow-hidden' to={`/imageInfo?id=${image.id}`} onMouseEnter={()=>setTextVisibility('visible h-auto')} onMouseLeave={()=>setTextVisibility('hidden h-0')}>
        <div className="imageContainer w-full h-[20rem] rounded-xl overflow-hidden">
            <img className="h-full w-full" src={image.imgLink} alt="An immage from gallery" />
        </div>
        <div className={`bg-amber-50 rounded-b-lg ${textVisibility}`}>
            <h4>{image.Name}</h4>
            <p><small>{image.Location}</small> • <small>{image.date}</small></p>
            <p>By {image.creator || 'Unknown'}</p>
        </div>
    </Link>
  )
}

