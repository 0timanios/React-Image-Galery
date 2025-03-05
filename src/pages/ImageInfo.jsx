import React from 'react'

// TODO: complete tailwind design
export default function ImageInfo({Images}) {
  const queryParams = new URLSearchParams(location.search);
  const paramName = queryParams.get('id'); 


  const image = Images.find(img => img.id === paramName);

  return (
    <>
      <img src={image.imgLink} alt="" />
      <p>{image.name}</p>
      <p>{image.creator}</p>
      <p>{image.location}</p>
      <p>{image.date}</p>
    </>
  )
}
