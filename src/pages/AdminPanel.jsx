import {React,useState,useEffect} from 'react'
import { databases, storage } from '../appwrite';

// TODO: take url in imgLink and push it with other data (check for mandatory ones) to the database so you can have a custom entry

export default function AdminPanel() {
  const [image, setImage] = useState(null);
  const [imgLink, setImgLink] = useState('');

  const handleFileChange = (ev)=>{
    const imgFile = ev.target.files[0]
    if (imgFile)
      setImage(imgFile)
  }
  const handleFileUpload = async ()=>{
    if (image){
      const res = await storage.createFile(import.meta.env.VITE_APPWRITE_BUCKET_ID,'unique()',image)
      const imgUrl = await storage.getFileView(import.meta.env.VITE_APPWRITE_BUCKET_ID, res.$id)
      setImgLink(imgUrl)
    }
    else console.warn('no image found')
  }

  return (
    <>
      <h1>Add an image</h1>
      <input type="file" accept='image/*' name="" id=""  onChange={handleFileChange}/>
      <button onClick={handleFileUpload}>Upload</button>
    </>

/* {<label htmlFor="imgName">Name:</label>
<input id='imgName' type="text" required />
<label htmlFor="imgLocation">Location:</label>
<input id='imgLocation' type="text" required />
<label htmlFor="imgDate">Date (YYYY-MM-DD):</label>
<input id='imgDate' type="text" required />} */
  )
}
