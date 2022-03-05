import React from 'react'
import { Link } from 'react-router-dom';
import {BiCartAlt, BiSearchAlt, BiUserCircle} from "react-icons/bi";



const Navbar = ({cartItems}) => {
  return (
      <div className='nav'>
    <ul className='icon' >
    <li>
        <input type='search'  placeholder="Search"/>
     </li>
     <li>
     <Link to = "/cart"><BiCartAlt style={{ color: "#222121" }} />{cartItems.length === 0 ? " " : cartItems.length}</Link>
     </li>
     <li>
      <Link to = "/login"><BiUserCircle  style={{ color: "#222121" }} /></Link>
     </li>
     <li className='help'>
      <Link to = "#">Help</Link>
     </li>
 </ul>
 </div>
  )
}

export default Navbar