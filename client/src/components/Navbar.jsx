import React, { useEffect, useState } from 'react'
import { FaBarsStaggered, FaBookOpen, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom"

const Navbar = () => {
  const [MenuOpen, setMenuOpen] = useState(false)
  const [Sticky, setSticky] = useState(false)

  const togglemenu = () => {
    setMenuOpen(!MenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true)
      }
      else {
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/about' },
    { link: 'Shop', path: '/shop' },
    { link: 'Sell your Book', path: '/admin/dashboard' },
    { link: 'Blog', path: '/blogs' }
  ]
  return (
    <header className='w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${Sticky?"sticky top-0 left-0 bg-purple-500":"bg-violet-200"}`}>
        <div className='flex justify-between items-center text-base gap-6'>
          <Link to="/" className='text-2xl font-bold text-black-600 flex items-center gap-2 '><FaBookOpen className="inline-block" />The Book Emporium</Link>
          <ul className='md:flex space-x-9 hidden'>
            {
              navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-purple-700'>{link}</Link>)
            }
          </ul>
          <div className='space-x-9 hidden lg:flex item-center'>
            <button><FaBarsStaggered className='w-S hover:text-purple-500' /></button>
          </div>
          {/*menu btn for mobile devices*/}
          <div className='md:hidden'>
            <button onClick={togglemenu} className='focus:outline-none'>
               {MenuOpen ? <FaXmark className='h-5 w-5 text-black' />:<FaBarsStaggered className='h-5 w-5 text-black'/>}
            </button>
          </div>
          <div className={`space-y-4 px-4 mt-16 py-7 bg-purple-400 ${MenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
           {
              navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-purple-700'>{link}</Link>)
            }
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
