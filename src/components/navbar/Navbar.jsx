import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div class="Ncontainer">
    <nav>
        <div class="left">
                <img src="images/logo.png" alt=""/>
                <ul>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">FSmart Club</a></li>
                    <li><a href="#">Governance</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Web3 Accelerator Program</a></li>
                </ul>
            </div>
            <div class="right">
                <button>Open the app</button>
            </div>
    </nav>
</div>
  )
}

export default Navbar
