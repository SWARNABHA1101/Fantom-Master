import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div class="header">
    <div class="upper">
        <div class="head-left">
            <h4>Audited. Automated. AI powered</h4>
            <h1>FS Investment Wallet</h1>
                <p>Start investing in web3 native startups with FS wallet. With an easy to use mobile wallet app and a hardware wallet we area the most secure investment wallet on the market. Get access to the hottest tokens and NFTs launches across L1s and L2s in a decentralized way with FS tokens and FS Key NFTs. Get in the FSmart Club.</p>
                </div>
            <div class="head-right">
                    <img src="images/head.png" alt=""/>
            </div>
    </div>
    <div class="lower">
        <div class="btn">
            <button>Open the app</button>
            <FontAwesomeIcon  icon={faCircleChevronRight} className="arrowicon" />
        </div>
        <div class="btn">
            <button>How to invest</button>
            <FontAwesomeIcon  icon={faCircleChevronRight} className="arrowicon" />
        </div>
        <div class="btn">
            <button>FSmart Club</button>
            <FontAwesomeIcon  icon={faCircleChevronRight} className="arrowicon" />
        </div>
        <div class="btn">
            <button>Apply to Web3 Accelerator</button>
            <FontAwesomeIcon  icon={faCircleChevronRight} className="arrowicon" />
        </div>
       
    </div>
    <div className="bottom">
        <img src="images/fontom.png" alt="" />
    </div>
</div>
  )
}

export default Header
