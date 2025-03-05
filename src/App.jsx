import { useState, useEffect } from 'react'
import './App.css'
import { databases } from './appwrite'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ImageInfo from './pages/ImageInfo';
import AdminPanel from './pages/AdminPanel';
import NavBar from './components/NavBar';

// TODO: store in cache data and retrieve it from there (watch caching course)
// TODO: autherntification to access the adminpanel

function App() {
  // array for storing image data (id, name, location, data, url)
  const [images, setImages] = useState([]);
  
  // fetching the datsbase for data on page reload
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await databases.listDocuments(import.meta.env.VITE_APPWRITE_DATABASE_ID,import.meta.env.VITE_APPWRITE_COLLECTION_ID)
        const document = res.documents;
        const imgList = document.map(img => {
          let formattedDate = new Intl.DateTimeFormat('en-GB', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }).format(new Date(img.Date.substring(0, 10)));
        
          return { 
            id: img.$id,
            name: img.Name,
            location: img.Location,
            imgLink: img.ImageLink,
            date: formattedDate,
            creator: img.Creator
          };
        });
        setImages(imgList)

      } catch (error) {
        console.warn('fetch error: ' + error);
      }
    };
    fetchImages();
  }, []);

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home Images={images}/>}></Route>
        <Route path='/imageInfo' element={<ImageInfo Images={images}/>}></Route>
        <Route path='/adminPanel' element={<AdminPanel Images={images}/>}></Route>
      </Routes>
    </>
  )
}

export default App;
