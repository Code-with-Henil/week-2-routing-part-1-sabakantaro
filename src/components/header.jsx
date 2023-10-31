import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <header className='flex justify-between items-center py-4 px-10 bg-gray-100'>
      <Link to='/'>
        <h1 className='text-4xl'>Bakery Store</h1>
      </Link>
      <nav className='flex space-x-4'>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/reserve'>Reserve</Link>
        <Link to='/access'>Access</Link>
      </nav>
    </header>
  )
}

export default header
