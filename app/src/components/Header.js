import React from 'react'
import NavBar from './NavBar'

export default function Header() {
  return (
    <div className='grid grid-cols-2 border-2 border-black shadow-lg'>
        <h1 className='text-5xl mt-6 mb-6 ml-10 font-medium'>Campus Health Portal</h1>
        <NavBar />
    </div>
  )
}
