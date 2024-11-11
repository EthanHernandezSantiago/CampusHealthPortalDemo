"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NavBar() {

    const page = usePathname();

  return (
    <div className='text-4xl mt-7 ml-20'>
        <nav>
            {page == "/" ? <Link href="/" className='p-3 border-b-2 border-black'>Home</Link> : <Link href="/" className='p-3'>Home</Link>}
            {page == "/dashboard" ? <Link href="/dashboard" className='p-3 border-b-2 border-black'>Dashboard</Link> : <Link href="/dashboard" className='p-3'>Dashboard</Link>}
            {page == "/reports" ? <Link href="/reports" className='p-3 border-b-2 border-black'>Reports</Link> : <Link href="/reports" className='p-3'>Reports</Link>}
            {page == "/profile" ? <Link href="/profile" className='p-3 border-b-2 border-black'>Profile</Link> : <Link href="/profile" className='p-3'>Profile</Link>}
        </nav>
    </div>
  )
}
