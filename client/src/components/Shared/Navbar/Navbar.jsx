import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
    <div className='py-4 border-b-[1px]'>
      <Container>
        <div className='flex items-center justify-between md:flex-row'>

          {/* For mobile devices, this div becomes a flex container that centers the logo */}
          <div className='flex justify-center w-full md:w-auto md:flex-none'>
            <Logo />
          </div>
          
          {/* Keep Search and MenuDropdown in their original positions for all screen sizes */}
          {/* Search component visible across all sizes */}
         <div  className='md:ml-auto'>
         <Search />
         </div>

          {/* MenuDropdown aligned to the right for all screen sizes */}
          <div className='md:ml-auto'>
            <MenuDropdown />
          </div>

        </div>
      </Container>
    </div>
  </div>
  )
}

export default Navbar
