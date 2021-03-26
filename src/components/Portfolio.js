import React, { Component } from "react";
import "../components/Portfolio.css";
import FeatherIcon from "feather-icons-react";
import personalImg from "../components/personal-image.jpeg";
import uniswapMobile from "./images/Screen Shot 2020-12-17 at 12.51.29 PM.png";
import uniswapDesktop from "./images/Screen Shot 2020-12-17 at 12.50.59 PM.png";
import openseaMobile from "./images/Screen Shot 2021-03-22 at 12.11.13 PM.png";
import openseaDesktop from "./images/Screen Shot 2021-03-22 at 10.35.19 AM.png";
import rickApi from "./images/Screen Shot 2021-03-23 at 9.40.19 PM.png";
import rustySpeedSingle from "./images/Screen Shot 2021-03-26 at 9.45.14 AM.png";
import rustySpeedAll from "./images/Screen Shot 2021-03-26 at 9.44.00 AM.png";
import triggerPickerAll from "./images/Screen Shot 2021-03-26 at 11.25.48 AM.png";
import triggerPickerSingle from "./images/Screen Shot 2021-03-26 at 11.38.00 AM.png";
import resume from "./images/Mark Mathews.pdf";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Uniswap Clone",
          technologies: " React, HTML, CSS",
          description:
            "Simple clone of a popular decentralized trading protocol website built in both mobile and desktop view.",
          originalLink: "https://app.uniswap.org/#/swap",
          githubLink: "https://github.com/Mathews41/Uniswap-clone",
          views: [
            {
              title: "Mobile View",
              image: uniswapMobile,
            },
            {
              title: "Desktop View",
              image: uniswapDesktop,
            },
          ],
        },
        {
          title: "OpenSea Clone",
          technologies: " React, HTML, CSS",
          description:
            "Simple clone of OpenSea.io built in both mobile and desktop view.",
          originalLink:
            "https://opensea.io/assets/0x06012c8cf97bead5deae237070f9587f8e7a266d/1518634",
          githubLink: "https://github.com/Mathews41/OpenSea-Clone",
          views: [
            {
              title: "Mobile View",
              image: openseaMobile,
            },
            {
              title: "Desktop View",
              image: openseaDesktop,
            },
          ],
        },
      ],
      designs: [
        {
          title: "Rusty Speed",
          description: "A personal car project in the process of being built",
          figmaLink:
            "https://www.figma.com/file/epOdzwstsy40WpZd5vCLqL/Rusty-Speed?node-id=0%3A1",
          views: [
            {
              title: "All Pages",
              image: rustySpeedAll,
            },
            {
              title: "Single Page",
              image: rustySpeedSingle,
            },
          ],
        },
        {
          title: "Trigger Picker",
          description: "Gun Building Website built in mobile view",
          figmaLink:
            "https://www.figma.com/file/mwTltirAuppa4O4uYcjuS9/Untitled?node-id=0%3A1",
          views: [
            {
              title: "Single Page",
              image: triggerPickerSingle,
            },
            {
              title: "All Pages",
              image: triggerPickerAll,
            },
          ],
        },
      ],
    };
  }
  render() {
    let mappedProjects = this.state.projects.map((project) => {
      return (
        <div className="project">
          <h1>{project.title}</h1>
          <div className="image-container">
            <div className="mobile">
              <h3>Mobile View</h3>
              <img
                className="project-mobile-img"
                src={project.views[0].image}
                alt="mobile view"
              />
            </div>
            <div className="desktop">
              <h3>Desktop View</h3>
              <img
                className="project-desktop-img"
                src={project.views[1].image}
                alt="desktop view"
              />
            </div>
          </div>
          <h5>Technologies: {project.technologies}</h5>

          <h6>{project.description}</h6>
          <a href={project.originalLink} target="blank_">
            View Original
          </a>
          <a href={project.githubLink} target="blank_">
            View On Github
          </a>
        </div>
      );
    });
    let mappedDesigns = this.state.designs.map((project) => {
      return (
        <div className="project">
          <h1>{project.title}</h1>
          <div className="image-container">
            <div className="mobile">
              <h3>Single Page View</h3>
              <img
                className="figma-single-img"
                src={project.views[0].image}
                alt="single page"
              />
            </div>
            <div className="desktop">
              <h3>All Pages View</h3>
              <img
                className="figma-all-img"
                src={project.views[1].image}
                alt="all pages"
              />
            </div>
          </div>
          <h6>{project.description}</h6>
          <a href={project.figmaLink} target="blank_">
            View Full Design
          </a>
        </div>
      );
    });
    return (
      <div className="main">
        <div className="wrapper">
          <div className="front-end-projects">
            <div className="nav-info">
              <div className="header-info">
                <img
                  className="header-img"
                  src={personalImg}
                  alt="personal image"
                />

                <div>
                  <h1>Mark Mathews</h1>
                  <h3>Software Engineer</h3>
                </div>
              </div>
              <div className="contact">
                <h2>Contact</h2>
                <div className="icon-container">
                  <div className="icon">
                    <FeatherIcon icon="inbox" />
                    <h5>Marklmathews4@gmail.com</h5>
                  </div>
                  <div className="icon">
                    <FeatherIcon
                      href="https://github.com/Mathews41"
                      icon="github"
                    />
                    <a
                      className="social-link"
                      href="https://github.com/Mathews41"
                      target="blank_"
                    >
                      github.com/Mathews41
                    </a>
                  </div>
                  <div className="icon">
                    <FeatherIcon
                      href="www.linkedin.com/in/markmathews41"
                      icon="linkedin"
                    />
                    <a
                      className="social-link"
                      href="https://www.linkedin.com/in/markmathews41/"
                      target="blank_"
                    >
                      linkedin.com/in/markmathews41/
                    </a>
                  </div>
                </div>
                <a href={resume} target="blank_">
                  View Full Resume
                </a>
              </div>
            </div>

            <h1>Projects</h1>
            <div className="mapped-projects">
              {mappedProjects}

              <div className="project">
                <h1>Rick & Morty API</h1>
                <h3>Desktop View</h3>
                <img
                  className="project-rick-img"
                  src={rickApi}
                  alt="desktop view"
                />
                <h5>Technologies: Javascript, React, Axios, HTML, CSS</h5>
                <h6>
                  A basic use of express calling to the Api and displaying a
                  list of characters.
                </h6>
                <a
                  href="https://github.com/Mathews41/Rick-Morty-API"
                  target="blank_"
                >
                  View Github Respository
                </a>
              </div>
            </div>
          </div>
          <div className="figma">
            <h1>Figma Designs</h1>
            <div className="mapped-projects">{mappedDesigns}</div>
          </div>
          <div className="about-me-container">
            <h1>About Me</h1>
            <div className="about-me">
              <p>
                I've been fueled by my <b>passion</b> for understanding the nuances of
                making and building <b>functional</b> software. I consider myself a
                ‘forever student,’ eager to both build on academic foundations,
                but even more importantly by staying in tune with the latest
                software releases through through my <b>addiction</b> to stack overflow
                and github.
              </p>
              <p>
                I am most comfortable with Javascript, HTML, CSS, and the React
                library.
              </p>
              <p>
                I've developed a strong understanding of React’s most <b>essential </b>
                concepts: JSX, components, and storing information via props or
                Redux. I can combine technologies in React’s modular programming
                style.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
