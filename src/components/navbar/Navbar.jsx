import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div class="Ncontainer">
    <nav>
        <div class="left">
                <img src="images/logo.png" alt=""/>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Litepaper</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Apply for IDO</a></li>
                </ul>
            </div>
            <div class="right">
                <button>Connect wallet</button>
            </div>
    </nav>
</div>
  )
}

export default Navbar