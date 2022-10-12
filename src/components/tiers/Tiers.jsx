import React from 'react'
import './tier.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'



const Tiers = () => {
    return (
        <div className="tier">
            <img src="images/back2.png" alt="" className="back2img" />
            <div className="res">
                <div className="Tcontents">
                    <div className="tleft">
                        <h1>Join the FSmart Club</h1>
                        <p>Join the Web3 VC DAO that gets access to the hottest deals on the market with our investment subscription.</p>
                        <h5>Start investing from $50</h5>
                        <div class="tBton">
                            <div class="tbtn1">
                                <button>Pay with Apple Pay</button>
                                <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicons" />
                            </div>
                            <div class="tbtn1">
                                <button>How to invest</button>
                                <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicons" />
                            </div>
                        </div>
                    </div>
                    <div className="tright">
                        <img src="images/Group 92 (1) 1.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tiers
