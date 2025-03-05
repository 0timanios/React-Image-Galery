import React from 'react'
import GalleryList from '../components/GalleryList'

// TODO: add banner title and tailwind

export default function Home({Images}) {
  return (
    <GalleryList imgList={Images}/>
  )
}
