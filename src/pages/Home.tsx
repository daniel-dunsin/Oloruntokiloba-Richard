import React from "react";
import { Link } from "react-router-dom";
import { LayoutContainer } from "../styles/components/Layout.styled";
import { HomeContainer } from "../styles/pages/Home.styled";
import toki from "../assets/images/toki.jpg";
import Button from "../components/Button";
import { BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import { navLinks } from "../static/navlinks";

const Home = () => {
  return (
    <LayoutContainer>
      <HomeContainer>
        <div className="home-text">
          <h1>Kayode Oloruntokiloba Richard</h1>
          <p>Graphics Designer</p>
          <ul className="links-container">
            <li>
              <a href="https://www.linkedin.com/in/oloruntokiloba-kayode-060099234">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:tokilobakayode23@gmail.com">
                <BsEnvelopeFill />
              </a>
            </li>
            {navLinks.map((link) => {
              return (
                <>
                  <li key={link.id}>
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                  {link.id !== navLinks.length && "|"}
                </>
              );
            })}
          </ul>
        </div>
        <div className="home-img">
          <img src={toki} alt="toki" />
        </div>
      </HomeContainer>
    </LayoutContainer>
  );
};

export default Home;
