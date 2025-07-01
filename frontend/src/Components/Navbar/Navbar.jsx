import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import cart from "../../assets/cart.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="Gifts&love" height="100px"/>
            <div>Gifts&love</div>
        </div>
        
        <ul  className='nav-menu'>

            <li onClick={() =>{setMenu("home")}}><Link style={{TextDecoration:"none", color: "crimson"}} to ="/">Home</Link>
            {menu==="home"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("mens")}}><Link style={{TextDecoration:"none", color:"crimson"}} to ="/mens">Mens</Link>
            {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("womens")}}><Link style={{TextDecoration:"none", color:"crimson"}} to ="/women">Women</Link>
            {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("kids")}}><Link style={{TextDecoration:"none", color:"crimson"}} to ="/kids">Kids</Link>
            {menu==="kids"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("Hampers")}}><Link style={{TextDecoration:"none", color:"crimson"}} to ="/hampers">Hampers</Link>
            {menu==="Hampers"?<hr/>:<></>}</li>
        </ul>
        <div className ="nav-login-cart">
            <Link to ="/login"><button>Login</button></Link>
            <Link to = "/signup"><button>Signup</button></Link>
            <Link to = "/cart"><img src={cart} alt="" height="70px"/></Link>
            <div className="nav-cart-count">0</div>
        </div>

    </div>
  )
}

export default Navbar