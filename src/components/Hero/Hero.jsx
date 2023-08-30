import React from "react";
import "./Hero.scss";
import HeroImg from "../../images/image-mockups.png";
import HeroBg from "../../images/bg-intro-desktop.svg";
import HeroBgMobile from "../../images/bg-intro-mobile.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="primaryBtn">Request Invite</button>
      </div>
      <div className="right">
          <img src={HeroBg} alt="heroImg" className="HeroBg" />
        <img src={HeroImg} alt="heroImg" className="heroImg" />
      </div>
    </section>
  );
};

export default Hero;
