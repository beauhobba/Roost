import React from "react";
import { NavLink } from "react-router-dom";
import coverphoto from "../images/roost_banner.png";


function Navigation() {
  return (
    <div className="navigation" >
      <nav className="navbar navbar-expand navbar-dark"  style={{
      backgroundColor: '#EC2383',
    }}>
        <div className="container">
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
                <NavLink className="nav-link" to="/about">
                  How to Play
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">
                  Purchase
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
