import React from 'react'
import "./Header.css"
import Logo from './nft.jpg'

function Header() {
  return (
    <div className='img-con'>
      <img className='Profile-img' src={Logo} alt='Logo' />
    </div>
  )
}

export default Header
