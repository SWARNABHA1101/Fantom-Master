import React from "react";
// import cardImage from "../../../public/images/cardImage.jpg";
// import image from "../../images/image.jpg";
// import protocol from "../../images/protocol.png";
import "./EasyAccessProjects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faMedium, 
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const EasyAccessProjects = () => {
  return ( 
    <div className="container">
      <img src="images/Group 97.jpg" alt="" className="img1"/>
      <div className="EasyAccessProjects">
        <h1>Get access to the hottest NFTs and token sales</h1>
        <p>
          Participate for free, or be part of the FSmart Club to invest in earlier rounds at better prices in the hottest NFT mints and token launches right from your mobile investment wallet.
        </p>
        <div className="cards">
          <div className="card">
            <div>
              <div className="cardTop">
                <div className="img">
                  <span>Completed</span>
                  <img src="images/cardImage.jpg" alt="img" />
                </div>
                <div className="imgBottom">
                  <img src="images/image.jpg" alt="" />
                  <ul className="socialLinks">
                    <li className="icon" id="globe">
                      <FontAwesomeIcon icon={faGlobe} />
                    </li>
                    <li className="icon" id="twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                    <li className="icon" id="telegram">
                      <FontAwesomeIcon icon={faTelegram} />
                    </li>
                    <li className="icon" id="discord">
                      <FontAwesomeIcon icon={faDiscord} />
                    </li>
                    <li className="icon" id="globe">
                      <FontAwesomeIcon icon={faMedium} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cardBottom">
                <h1>MagicCraft</h1>
                <span>$MGCT</span>
                <button>Post IDO Review</button>
                <div className="usd">
                  <p>Public Total Rais USD</p>
                  <span>$125,000</span>
                </div>
                <div>
                  <div className="participants">
                    <p>Participants</p>
                    <span>300</span>
                  </div>
                  <div className="protocol">
                    <img src="images/protocol.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div className="cardTop">
                <div className="img">
                  <span>Completed</span>
                  <img src="images/cardImage.jpg" alt="img" />
                </div>
                <div className="imgBottom">
                  <img src="images/cardImage.jpg" alt="" />
                  <ul className="socialLinks">
                    <li className="icon" id="globe">
                      <FontAwesomeIcon icon={faGlobe} />
                    </li>
                    <li className="icon" id="twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                    <li className="icon" id="telegram">
                      <FontAwesomeIcon icon={faTelegram} />
                    </li>
                    <li className="icon" id="discord">
                      <FontAwesomeIcon icon={faDiscord} />
                    </li>
                    <li className="icon" id="globe">
                      <FontAwesomeIcon icon={faMedium} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cardBottom">
                <h1>MagicCraft</h1>
                <span>$MGCT</span>
                <button>Post IDO Review</button>
                <div className="usd">
                  <p>Public Total Rais USD</p>
                  <span>$125,000</span>
                </div>
                <div>
                  <div className="participants">
                    <p>Participants</p>
                    <span>300</span>
                  </div>
                  <div className="protocol">
                    <img src="images/protocol.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div className="cardTop">
                <div className="img">
                  <span>Completed</span>
                  <img src="images/cardImage.jpg" alt="img" />
                </div>
                <div className="imgBottom">
                  <img src="images/cardImage.jpg" alt="" />
                  <ul className="socialLinks">
                    <li className="icon" id="globe">
                      <FontAwesomeIcon icon={faGlobe} />
                    </li>
                    <li className="icon" id="twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                    <li className="icon" id="telegram">
                      <FontAwesomeIcon icon={faTelegram} />
                    </li>
                    <li className="icon" id="discord">
                      <FontAwesomeIcon icon={faDiscord} />
                    </li>
                    <li className="icon" id="globe">
                      <FontAwesomeIcon icon={faMedium} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cardBottom">
                <h1>MagicCraft</h1>
                <span>$MGCT</span>
                <button>Post IDO Review</button>
                <div className="usd">
                  <p>Public Total Raise USD</p>
                  <span>$125,000</span>
                </div>
                <div>
                  <div className="participants">
                    <p>Participants</p>
                    <span>300</span>
                  </div>
                  <div className="protocol">
                    <img src="images/protocol.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyAccessProjects;
