import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";

import SharathImage from "../../assets/SharathVaidya.jpg";

import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import java from "../../assets/java.svg";
import mysqlIcon from "../../assets/mysql.svg";
import oracleIcon from "../../assets/oracle.png";
import mongodbIcon from "../../assets/mongodb.svg";
import servletIcon from "../../assets/servlets.png";
import jspIcon from "../../assets/jsp.png";
import firebaseIcon from "../../assets/firebase.svg";
import apiIcon from "../../assets/api-interface.svg";

export function About() {
  const skills = [
    { icon: htmlIcon, alt: "HTML" },
    { icon: cssIcon, alt: "CSS" },
    { icon: jsIcon, alt: "JavaScript" },
    { icon: reactIcon, alt: "React" },
    { icon: java, alt: "Java" },
    { icon: mysqlIcon, alt: "MySQL" },
    { icon: oracleIcon, alt: "Oracle" },
    { icon: mongodbIcon, alt: "MongoDB" },
    { icon: servletIcon, alt: "Servlets" },
    { icon: jspIcon, alt: "JSPs" },
    { icon: firebaseIcon, alt: "Firebase" },
    { icon: apiIcon, alt: "REST APIs" },
  ];

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hello! I'm Sharath Vaidya, a passionate UI/UX developer and full-stack Java enthusiast with a strong foundation in web technologies, Java backend, and responsive design.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I love crafting intuitive UIs and building full-stack web applications using Java, React, and modern frameworks.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <p>
            I also enjoy creating responsive front-ends and integrating APIs with clean code architecture and RESTful practices.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Computer Science and Engineering (CSE)</h4>
            <p>Keshav Memorial Engineering College | 2026</p>
            <p>7.88 CGPA</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Intern / Developer</h4>
            <p>Company Name or Freelance | Start Date - Present</p>
            <p>City, India</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={600}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          {skills.map((skill, i) => (
            <div className="hability" key={i}>
              <ScrollAnimation animateIn="fadeInUp" delay={100 + i * 10}>
                <img src={skill.icon} alt={skill.alt} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={800}>
          <img src={SharathImage} alt="Sharath Vaidya" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
