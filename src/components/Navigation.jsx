import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import coverphoto from "../images/roost_banner.png";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import {
  FaHome,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaKiwiBird,
  FaBlogger,
  FaPeopleCarry,
} from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

function Navigation() {
  const mobile = {
    backgroundColor: "#EC2383",
    flex: "display",
    alignItems: "center",
    justifyContent: "center",
  };
  const web = {
    backgroundColor: "#EC2383",
    flex: "display",
  };

  const [navbar, setNavbar] = useState(web);

  useEffect(() => {
    if (isMobile) {
      setNavbar(mobile);
    }
  }, []);

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark" style={navbar}>
        <BrowserView>
          <div
            className="container"
            style={{
              alignItems: "center",
              display: "flex",
              width: "100%",
              alignContent: "center",
            }}
          >
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
          <div>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <FaHome style={{ width: 40 }} />
                    <span className="sr-only">(current)</span>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/rules"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <FaGamepad style={{ width: 40 }} />
                    Rules
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/purchase"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <FaMoneyBillWave style={{ width: 40 }} />
                    Kickstarter
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <FaPhoneAlt style={{ width: 40 }} />
                    Contact
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                <NavLink className="nav-link" to="/expansion">
                  <FaKiwiBird style={{width: 30}}/>
                </NavLink>
              </li> */}

                {/* 
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  <FaBlogger style={{width: 30}}/>
                </NavLink>
              </li> */}

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/supporters"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <FaPeopleCarry style={{ width: 40 }} />
                    Patrons
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
