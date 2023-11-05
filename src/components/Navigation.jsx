import React from "react";
import { NavLink } from "react-router-dom";
import coverphoto from "../images/roost_banner.png";
import {BrowserView, MobileView} from 'react-device-detect';
import { FaHome, FaMoneyBillWave, FaPhoneAlt, FaKiwiBird, FaBlogger, FaPeopleCarry } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

function Navigation() {
  return (
    <div className="navigation" >
      <nav className="navbar navbar-expand navbar-dark"  style={{
      backgroundColor: '#EC2383',
    }}>
      

        <BrowserView>
        <div className="container" style={{alignItems: 'center', display: "flex", width: '100%', alignContent: 'center'}}>
          <NavLink className="navbar-brand" to="/">
            <div>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={coverphoto}
              alt=""
              width={150}
            />
            </div>
          </NavLink>

          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rules">
                Play
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/purchase">
                  Purchase
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/expansion">
                  Expansion
                </NavLink>
              </li> */}


              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/supporters">
                  Patrons
                </NavLink>
              </li>

            </ul>
          </div>
          </div>
          </BrowserView>
          <MobileView>
          <div className="container" style={{alignContent: 'center', display: "flex", width: '100%'}}>
          <div >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                <FaHome style={{width: 30}}/>
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rules">
                  <FaGamepad style={{width: 30}}/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/purchase">
                  <FaMoneyBillWave style={{width: 30}}/>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <FaPhoneAlt style={{width: 30}}/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/expansion">
                  <FaKiwiBird style={{width: 30}}/>
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  <FaBlogger style={{width: 30}}/>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/supporters">
                  <FaPeopleCarry style={{width: 30}}/>
                </NavLink>
              </li>

            </ul>
          </div>
          </div>

          </MobileView>




      </nav>
    </div>
  );
}

export default Navigation;
