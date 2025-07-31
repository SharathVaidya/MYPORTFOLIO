import ScrollAnimation from "react-animate-on-scroll";
import githubIcon from "../../assets/github.svg";
import { Container } from "./styles";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Apollo247 Clone */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/SharathVaidya/Apollo-clone24-7" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Apollo247 Doctor Listing Clone</h3>
              <p>
                A clone of the Apollo247 doctor listing destination page using Next.js with off-page SEO, REST APIs, and MongoDB. Features dynamic filters and responsive UI.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>MongoDB</li>
                <li>REST API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Blog Editor */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/SharathVaidya/blog-editor" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Blog Editor Application</h3>
              <p>
                A modern blog management system with rich blog creation, editing, publishing, and real-time notifications. Built with a responsive full-stack architecture.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* SmartPay */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/SharathVaidya/Smartpay" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartPay</h3>
              <p>
                A secure digital payment manager in Java with OTP-based 2FA, fraud detection, PDF exports, and recurring auto-debit payments.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>MongoDB</li>
                <li>PDFBox</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Movie Watchlist */}
<ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
    </header>
    <div className="body">
      <h3>Movie Watchlist</h3>
      <p>
        A web application to manage and track movies you've watched or plan to watch. Includes search, filter, and wishlist features with live movie data.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>React</li>
        <li>TMDb API</li>
        <li>MongoDB</li>
      </ul>
    </footer>
  </div>
</ScrollAnimation>


        {/* Chrome Extension */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Chrome Extension - Tab Manager</h3>
              <p>
                A Chrome extension for tab grouping, duplicate tab detection, and session save/restore. Helps manage cluttered tabs with ease.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Chrome API</li>
                <li>HTML/CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* ATM Simulator */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>ATM Simulation System</h3>
              <p>
                A Java console-based ATM simulation with secure PIN verification, balance inquiry, mini statement printing, and session tracking.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>OOP</li>
                <li>File I/O</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
