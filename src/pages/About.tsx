import React from "react";
import { AboutContainer } from "../styles/pages/About.styled";
import toki from "../assets/images/toki.jpg";
import { aboutData } from "../static/tokiAbout";
import Title from "../components/Title";
import { Graphicsprogress, webProgress } from "../static/tokiProgress";
import ProgressBar from "../components/ProgressBar";

const About = () => {
  return (
    <AboutContainer>
      <div className="about-details">
        <div className="toki-info">
          <img src={toki} alt="toki" />
          <ul className="about-data-container">
            {aboutData.map((data, index: number) => {
              return (
                <article key={index} className="about-data">
                  <p className="question">{data.question} :</p>
                  <p className="answer">{data.answer}</p>
                </article>
              );
            })}
          </ul>
        </div>
        <div className="skills-section">
          <h1>Graphics Design skills</h1>
          <div className="skills-container">
            {Graphicsprogress.map((prog, index: number) => {
              return (
                <div key={index}>
                  <h5 className="progress-title">
                    {prog.skill} {prog.progress}%
                  </h5>
                  <ProgressBar progress={prog.progress} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="skills-section">
          <h1>Web Design skills</h1>
          <div className="skills-container">
            {webProgress.map((prog, index: number) => {
              return (
                <div key={index}>
                  <h5 className="progress-title">
                    {prog.skill} {prog.progress}%
                  </h5>
                  <ProgressBar progress={prog.progress} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="about-toki">
        <Title text="About Me" />
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          blanditiis officiis repellat recusandae vitae aliquam rem
          reprehenderit, ab modi quas quos fugit. Quasi cum nam quisquam et ea
          odit maxime ducimus vel? Libero autem est explicabo, accusantium
          dignissimos neque aspernatur amet
        </p>
        <p className="about-paragraph">
          Commodi iure voluptatum maiores nobis suscipit, placeat voluptates
          temporibus rerum fuga consequatur blanditiis molestias at obcaecati
          asperiores quisquam possimus quia. Hic animi minus molestias
          necessitatibus quod sequi doloribus. Beatae.
        </p>
        <p className="about-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          dicta doloremque fugiat, nesciunt modi similique blanditiis expedita
          odit ipsam dignissimos eum, quisquam, porro rerum a! Amet explicabo
          eligendi, placeat saepe illum harum dignissimos? Incidunt omnis ex
          animi quos deserunt blanditiis!
        </p>
      </div>
    </AboutContainer>
  );
};

export default About;
