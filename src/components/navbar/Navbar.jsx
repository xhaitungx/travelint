import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import "./navbar.scss";

const Navbar = (props) => {
  const [menuOn, setMenuOn] = useState(false);
  const pages = ["Home", "About us", "Contact"];
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
        <Link to="/">
          <h2 className="logo">
            <span>Travel</span>.int
          </h2>
        </Link>

        <ul className="navbar-pages__container">
          {pages.map((item) => (
            <Link to={`${item}`}>
              <li>{item}</li>
            </Link>
          ))}
        </ul>

        <div className="button-action">
          <Button
            sx={buttonStyle("#3075C6", "#fff")}
            onClick={() => navigate("/Login")}
          >
            Login
          </Button>
          <Button
            sx={buttonStyle("#fff", "#3075C6")}
            onClick={() => navigate("/Signup")}
          >
            Sign up
          </Button>
        </div>
        <div className="menu">
          {menuOn ? (
            <>
              <Close fontSize="large" onClick={() => setMenuOn(!menuOn)} />
              <div className="menu--content">
                <ul className="menu--navbar-pages__container">
                  {pages.map((item) => (
                    <Link to={`${item}`} onClick={() => setMenuOn(!menuOn)}>
                      <li>{item}</li>
                    </Link>
                  ))}
                </ul>

                <div className="menu--button-action">
                  <Button
                    sx={buttonMenuStyle("#3075C6", "#fff")}
                    onClick={() => {
                      navigate("/Login");
                      setMenuOn(!menuOn);
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    sx={buttonMenuStyle("#fff", "#3075C6")}
                    onClick={() => {
                      navigate("/Signup");
                      setMenuOn(!menuOn);
                    }}
                  >
                    Sign up
                  </Button>
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
