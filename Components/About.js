import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import lvp from "../public/Images/lvp.jpg";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about-container-main">
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br />
            <span>Vadodara Bucket List</span>
          </h1>
          <h4>
            "Best Place to <span>explore</span> Barodian
            Food"
          </h4>
        </div>
        <div className="about-right">
          <img src={lvp} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
