import {React,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../appwrite';

export default function NavBar() {
  const navigate = useNavigate();

  async function checkCredentials(){
    try {
      const currentSession = await account.get();
      navigate('/adminPanel');
    } catch (error) {
      console.warn(error + ' problem in account');
      navigate('/login');
    }
  }

  return (
    <nav className='navBar flex flex-row justify-end items-center bg-primary-dark-red-03 w-full px-4 h-[4rem]'>
        <ul className='list-none flex flex-row gap-2 align-middle h-full place-items-center'>
            <li><Link to={'/'}>Home</Link> </li>
            <li><button onClick={checkCredentials}>Admin</button> </li>
        </ul>
    </nav>
  )
}
