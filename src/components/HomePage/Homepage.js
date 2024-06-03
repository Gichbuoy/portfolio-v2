import React, { useEffect, useState } from "react";
import * as Style from "./style";
import { FaGithub, FaTwitter, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as Styling from "../Profile/Components/Experience/style";
import { TiArrowRightThick } from "react-icons/ti";
import { MdOutlineWavingHand } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@mui/material";

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleDownloadCV = () => {
    // Implement your download CV logic here
    // use window.open() to download the CV file
    window.open("https://drive.google.com/file/d/1ZTr34IGnivyuogPF_GBXfQhjpnhvzR9y/view?usp=sharing", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/gichbuoy/", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/Gichbuoy1", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/alexx-maina/", "_blank");
  };

  const handleMediumClick = () => {
    window.open("https://medium.com/@lexizgichbuoy", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:mainaalexx21@gmail.com";
  };




  return (
    <Style.HomePage>
      <Style.HomePage_Container className="Home_backgroundImage">
        <Style.HomePage_ImageContainer
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Style.HomePage_img
            src={require("../../images/img3.png")}
            alt="Img"
          />
        </Style.HomePage_ImageContainer>
        <Style.HomePage_Paragraph data-aos="fade-right">
          {" "}
          Alexx Maina's website{" "}
        </Style.HomePage_Paragraph>
        <Link
          to="/profile"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <Style.HomePage_Button data-aos="fade-left">
            Learn about Me
          </Style.HomePage_Button>
        </Link>

        <Style.SocialMediaIcons data-aos="fade-left">

          <Button onClick={handleGithubClick}>
              <FaGithub size={20} />
          </Button>
          <Button onClick={handleTwitterClick}>
              <FaTwitter size={20} />
          </Button>
          <Button onClick={handleLinkedinClick}>
              <FaLinkedin size={20} />
          </Button>
          <Button onClick={handleMediumClick}>
              <FaMedium size={20} />
          </Button>
          <Button onClick={handleEmailClick}>
              <FaEnvelope size={20} />
          </Button>
        </Style.SocialMediaIcons>


      <Style.DownloadCVButton data-aos="fade-right" onClick={handleDownloadCV}>
          Download CV
        </Style.DownloadCVButton>

      </Style.HomePage_Container>

      

    </Style.HomePage>
  );
};

export default Homepage;
