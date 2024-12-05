import React from "react";
import "./index.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";

export default function Profile() {
  return (
    <div className="profile">
      <div className="image">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/006/026/259/small_2x/tranquil-summer-vacation-holiday-landscape-tropical-island-sunset-beach-palms-shore-calm-sea-sand-exotic-nature-scenic-inspirational-and-peaceful-seascape-reflection-amazing-sky-sunset-photo.jpg"
          alt="."
          className="cover"
        />
        <img
          src="https://herpackinglist.com/wp-content/uploads/2015/04/solo-female-traveler.jpeg"
          alt="."
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FaFacebook />
            </a>
            <a href="http://instagram.com">
              <FaInstagram />
            </a>
          </div>
          <div className="center">
            <span>sunxiaochuan</span>
            <div className="info">
              <div className="item">
                <MdOutlinePlace />
                <span>USA</span>
              </div>
              <div className="item">
                <IoLanguageOutline />
                <span>English</span>
              </div>
              <button>Follow</button>
            </div>
          </div>
          <div className="right">
            <MdOutlineMail />
            <MdPhoneAndroid />
          </div>
        </div>
      </div>
    </div>
  );
}
