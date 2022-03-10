import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import "./footer.scss";
const Footer = () => {
  const footerContent = [
    {
      heading: "Menu",
      content: ["Home", "Tours", "Category", "About Us"],
    },
    {
      heading: "Booking Plan",
      content: ["Personal Trip", "Group Trip"],
    },
    {
      heading: "Support",
      content: ["FAQ", "Terms & Conditions", "Privacy Policy"],
    },
  ];

  const socialContact = [
    { icon: Facebook, url: "https://www.facebook.com/" },
    { icon: Twitter, url: "https://twitter.com/" },
    { icon: Instagram, url: "https://www.instagram.com/" },
  ];

  const getApp = {
    heading: "Get App",
    content: [
      { name: "Google Play Store", url: "https://www.google.com/" },
      { name: "App Store", url: "https://www.google.com/" },
      { name: "Other Stores ", url: "https://www.google.com/" },
    ],
  };

  return (
    <div className="footer padding-section">
      <div className="flex-item">
        <h2 className="logo ">
          <span>Travel</span>.int
          <p className="slogan">Tận hưởng chuyến đi cùng Travelint</p>
          <div className="social--contact">
            {socialContact.map((item) => (
              <a href={`${item.url}`} target="_blank">
                {
                  <item.icon
                    sx={{
                      width: "36px",
                      height: "36px",
                      color: "#AEAEAE",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  />
                }
              </a>
            ))}
          </div>
        </h2>
      </div>

      {footerContent.map((item) => (
        <div className="flex-item">
          <h3 className="footer--label">{item.heading}</h3>
          <ul>
            {item.content.map((content) => (
              <Link to={`${content}`}>
                <li className="footer--content">{content}</li>
              </Link>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex-item">
        <h3 className="footer--label">{getApp.heading}</h3>
        <ul>
          {getApp.content.map((content) => (
            <a href={content.url} target="_blank">
              <li className="footer--content">{content.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
