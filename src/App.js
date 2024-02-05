import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <section id="home">
            <h1>Product Design Sprint</h1>
            <p>March 8-10, 2024 | Hybrid Event - Virtual & Western University</p>
            <br/>
            <p>Develop your product management, design thinking, and prototyping</p>
            <p>skills in a fun weekend-long competition.</p>
            <br/>
            <p>Open to all levels. Participate from anywhere in the world.</p>
            <button
            role="link"
            onClick={() => openInNewTab('https://monkeytype.com/')}>
              Apply Now!
              </button>
            <p>Applications close Jan 29, 2024.</p>
          </section>
          <section id="about">
            <h2>About</h2>
            <p>This is the about section.</p>
          </section>
          <section id="partners">
            <h2>Partners</h2>
            <p>This is the partners section.</p>
          </section>
          <section id="faq">
            <h2>FAQ</h2>
            <p>This is the FAQ section.</p>
          </section>
          <section id="contact">
            <h2>Contact Us</h2>
            <p>This is the contact section.</p>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
