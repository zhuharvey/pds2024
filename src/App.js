import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Create from "./assets/create.svg";
import Innovate from "./assets/innovate.svg";
import Learn from "./assets/learn.svg";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <section className="section" id="home">
            <h1>Product Design Sprint 2024</h1>
            <p className="purple">
              March 8-10, 2024 | Hybrid Event - Virtual & Western University
            </p>
            <br />
            <p>
              Develop your product management, design thinking, and prototyping
            </p>
            <p>skills in a fun weekend-long competition.</p>
            <br />
            <p>Open to all levels. Participate from anywhere in the world.</p>
            <button
              role="link"
              onClick={() => openInNewTab("https://monkeytype.com/")}
            >
              Apply Now!
            </button>
            <p>Applications close March 4, 2024</p>
          </section>
          <section className="section" id="about">
            <h2>About</h2>
            <div className="cards">
              <div className="card">
                <img src={Learn} />
                <h2>Learn</h2>
                <p>
                  Attend workshops from industry pros, network with event
                  partners, and get support from mentors.
                </p>
              </div>
              <div className="card">
                <img src={Create} />
                <h2>Create</h2>
                <p>
                  In teams of up to 4, build a prototype using design thinking
                  and UX design skills.
                </p>
              </div>
              <div className="card">
                <img src={Innovate} />
                <h2>Innovate.</h2>
                <p>
                  Turn your brilliant ideas into tangible projects and pitch
                  your solutions.
                </p>
              </div>
            </div>
          </section>
          <section className="section" id="partners">
            <h2>Partners</h2>
            <p>This is the partners section.</p>
          </section>
          <section className="section" id="faq">
            <h2>FAQ</h2>
          </section>
          <section className="section" id="contact">
            <h2>Contact Us</h2>
            <p>This is the contact section.</p>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
