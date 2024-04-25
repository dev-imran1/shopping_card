import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react';
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="links">
        <Link to='/shop'>
            <ShoppingCart size={32}/>
        </Link>
        <Link to='/card'>card</Link>
      </div>
    </div>
  )
}

export default Navbar
