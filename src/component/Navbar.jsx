import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-indigo-900 text-white py-3 px-5'>
        <div className='logo'>
            <span className='font-bold text-xl text-white'>iTask</span>
        </div>
        <ul className='flex gap-3'>
            <li className='hover:font-bold curser-pointer transition-all'>Home</li>
            <li className='hover:font-bold curser-pointer transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
