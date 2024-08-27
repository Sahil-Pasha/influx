import React, { useContext } from "react";
import "./Header.css";
import user from "../Assets/user.jpg";
import MyContext from "../context/MyContext";
import homeIcon from "../Assets/Home.svg";
import envelopeIcon from "../Assets/env2.png";

const Header = () => {
  const { isMobile } = useContext(MyContext);
  return (
    <>
      {isMobile ? (
        <div className="main-container">
          <div className="d-flex flex-row justify-content-end">
            <img src={homeIcon} alt="Home-icon" />
          </div>
          <div className="d-flex justify-content-center">
            <img
              width={200}
              height={100}
              src={envelopeIcon}
              alt="Envelope -icon"
            />
          </div>
        </div>
      ) : (
        <div className="header">
          <div className="navbar-custom">
            <ul className="upper-navbar">
              <li>PLACEHOLDER TITLE</li>
              <li>PLACEHOLDER TITLE</li>
              <li>PLACEHOLDER TITLE</li>
              <button className="sign-in-btn">
                <img width={20} height={20} src={user} alt="" /> SIGN IN
              </button>
            </ul>
            <hr style={{ color: "white" }} />
            <ul className="lower-navbar">
              <li>PLACEHOLDER TITLE</li>
              <li>PLACEHOLDER TITLE</li>
              <li>PLACEHOLDER TITLE</li>
              <li>PLACEHOLDER TITLE</li>
            </ul>
          </div>
          <div className="header-content">
            <p className="MVP-heading">M V P S U B S C R I P T I O N</p>
            <p className="MVP-sub-heading">
              Your go-to Movie Membership Program
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
