import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='navBar flex flex-row justify-end items-center bg-primary-dark-red-03 w-full px-4 h-[4rem]'>
        <ul className='list-none flex flex-row gap-2 align-middle h-full place-items-center'>
            <li><Link to={'/'}>Home</Link> </li>
            <li><Link to={'/adminPanel'}>Admin</Link> </li>
        </ul>
    </nav>
  )
}
