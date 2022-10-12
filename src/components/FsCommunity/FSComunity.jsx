import React from "react";
import "./FSComunity.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const FSComunity = () => {
  return (
    <div className="Comunitycontainer">
      <div className="FSComunity">
        <h1>Earn with FS</h1>
        <p>
          FS token holders get to be part of the FSmart Club while the Liquid subscription is enabling for them earning opportunities with fixed and variable APY.
        </p>
          <div className="Earn $CHRP">
            <div className="img">{/* <img src={image} alt="" /> */}</div>
            <div className="ComunitycardBottom">
              <h1>How-to</h1>
              <p>FS Project Post IDO Review:</p>
              <span>$MGCT &gt; Dec 2021</span>
              <div class="fBton">
                <div class="fbtn1">
                  <button>How to invest</button>
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="arrowicons"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Earn USDC">
            <div className="img">{/* <img src={image} alt="" /> */}</div>
            <div className="ComunitycardBottom">
              <h1>How-to</h1>
              <p>FS Project Post IDO Review:</p>
              <span>$MGCT &gt; Dec 2021</span>
              <div class="fBton">
                <div class="fbtn1">
                  <button>How to invest</button>
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="arrowicons"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Earn FS fixed rate">
            <div className="img">{/* <img src={image} alt="" /> */}</div>
            <div className="ComunitycardBottom">
              <h1>How-to</h1>
              <p>FS Project Post IDO Review:</p>
              <span>$MGCT &gt; Dec 2021</span>
              <div class="fBton">
                <div class="fbtn1">
                  <button>How to invest</button>
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="arrowicons"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FSComunity;
