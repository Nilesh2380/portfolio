import React from "react";
import "./Hero.css";
import ProfileImage from "../Image/image.jpeg";   

const Hero = () => {
  return (
    <section className="hero">
      <div className="intro-text">
        <h2>
          Hello, I'm <span>Nilesh Khune</span>
        </h2>
        <h3>
          and I'm a <span className="highlight">Frontend Developer</span>
        </h3>
        <div className="cta-buttons">
       <a href="https://drive.google.com/file/d/13y_fAzD59WYhhkIO_vH2xq_MgF9KDUgo/view?usp=sharing" target="_blank">
        <button className="btn resume">Resume</button>
        </a>
        </div>
      </div>
      <div className="profile-image">
        <img src={ProfileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
