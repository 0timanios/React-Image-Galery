import {React,useState,useEffect} from 'react'
import { databases, storage, account} from '../appwrite';
import { useNavigate } from 'react-router-dom';

// TODO: take url in imgLink and push it with other data (check for mandatory ones) to the database so you can have a custom entry

export default function AdminPanel() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imgLink, setImgLink] = useState('');

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const [imgContainerVisibility, setImgContainerVisibility] = useState('visible h-auto');
  const [dbContainerVisibility, setDbContainerVisibility] = useState('hidden h-0');

  const handleDbUpload = async ()=>{
    //TODO
    const promise = await databases.createDocument(import.meta.env.VITE_APPWRITE_DATABASE_ID, import.meta.env.VITE_APPWRITE_COLLECTION_ID, 'unique()',{Name:name,Location:location,Date:date,ImageLink:imgLink});
  }
  const handleFileChange = (ev)=>{
    const imgFile = ev.target.files[0]
    if (imgFile)
      setImage(imgFile)
  }
  const handleFileUpload = async ()=>{
    if (image){
      const res = await storage.createFile(import.meta.env.VITE_APPWRITE_BUCKET_ID,'unique()',image)
      const imgUrl = `https://cloud.appwrite.io/v1/storage/buckets/${import.meta.env.VITE_APPWRITE_BUCKET_ID}/files/${res.$id}/view?project=${import.meta.env.VITE_APPWRITE_PROJECT_ID}&mode=admin`;

// https://cloud.appwrite.io/v1/storage/buckets/67c78206000a92429902/files/67ca614518225642112d/view?project=undefined
// https://cloud.appwrite.io/v1/storage/buckets/67c78206000a92429902/files/67ca614518225642112d/view?project=67c7817d0022c8dbc5e9&mode=admin
      setImgLink(imgUrl)
      setImgContainerVisibility('hidden h-0')
      setDbContainerVisibility('visible h-auto')
    }
    else console.warn('try again')
  }
  const sessionLogOut = async ()=>{
    await account.deleteSessions();
    navigate('/')

  }

  return (
    <>
      <button onClick={sessionLogOut}>Log out</button>
      <div className={imgContainerVisibility}>
        <h1>Add an image</h1>
        <input type="file" accept='image/*' name="" id=""  onChange={handleFileChange}/>
        <button onClick={handleFileUpload}>Upload</button>
      </div>
      <div className={dbContainerVisibility}>
        <label htmlFor="imgName">Name:</label>
        <input id='imgName' type="text" onChange={ev=>setName(ev.target.value)} required />
        <label htmlFor="imgLocation">Location:</label>
        <input id='imgLocation' type="text" onChange={ev=>setLocation(ev.target.value)} required />
        <label htmlFor="imgDate">Date (YYYY-MM-DD):</label>
        <input type="date" name="imgDate" id="imgDate" onChange={ev=>setDate(ev.target.value)} required/>
        <button onClick={handleDbUpload}>Upload</button>
      </div>
    </>

  )
}
