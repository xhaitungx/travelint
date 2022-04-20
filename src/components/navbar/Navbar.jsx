import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../../LoginContext";
import { Button } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import "./navbar.scss";

const Navbar = (props) => {
  const customerID = useContext(LoginContext);
  console.log(customerID);
  const [menuOn, setMenuOn] = useState(false);
  const pages = [
    { label: "Home", path: "", default: true },
    { label: "About us", path: "about-us", default: false },
    { label: "Contact", path: "contact", default: false },
  ];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  let navigate = useNavigate();
  function buttonStyle(primaryColor, secondColor) {
    var obj = {
      backgroundColor: `${primaryColor}`,
      color: `${secondColor}`,
      "&:hover": {
        backgroundColor: `${primaryColor}`,
        opacity: 0.6,
      },
    };
    return obj;
  }

  function buttonMenuStyle(primaryColor, secondColor) {
    var obj = {
      backgroundColor: `${primaryColor}`,
      fontSize: "12px",
      border: `1px solid ${secondColor}`,
      borderRadius: "0",
      color: `${secondColor}`,
      padding: "0 2rem",
      "&:hover": {
        backgroundColor: `${primaryColor}`,
        opacity: 0.6,
      },
    };
    return obj;
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <NavLink to="/">
          <h2 className="logo">
            <span>Travel</span>.int
          </h2>
        </NavLink>

        <ul className="navbar-pages__container">
          {pages.map((item) => (
            <NavLink
              to={`/${item.path}`}
              className={({ isActive }) =>
                isActive ? "navLink navLink-active" : "navLink"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </ul>

        <div className="button-action">
          {customerID ? (
            <Button
              sx={buttonStyle("#fff", "#3075C6")}
              onClick={() => {
                window.sessionStorage.clear();
                window.location.reload();
              }}
            >
              Log out
            </Button>
          ) : (
            <>
              <Button
                sx={buttonStyle("#3075C6", "#fff")}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                sx={buttonStyle("#fff", "#3075C6")}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </Button>
            </>
          )}
        </div>

        <div className="menu">
          {menuOn ? (
            <>
              <Close fontSize="large" onClick={() => setMenuOn(!menuOn)} />
              <div className="menu--content">
                <ul className="menu--navbar-pages__container">
                  {pages.map((item) => (
                    <NavLink to={`${item}`} onClick={() => setMenuOn(!menuOn)}>
                      <li>{item}</li>
                    </NavLink>
                  ))}
                </ul>

                <div className="menu--button-action">
                  {customerID ? (
                    <>
                      <Button
                        sx={buttonMenuStyle("#3075C6", "#fff")}
                        onClick={() => {
                          navigate("/Login");
                        }}
                      >
                        Login
                      </Button>
                      <Button
                        sx={buttonMenuStyle("#fff", "#3075C6")}
                        onClick={() => {
                          navigate("/Signup");
                        }}
                      >
                        Sign up
                      </Button>
                    </>
                  ) : (
                    <Button>Log out</Button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <Menu fontSize="large" onClick={() => setMenuOn(!menuOn)} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
