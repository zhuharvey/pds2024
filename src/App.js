import React from 'react';
import Navbar from './components/Navbar';
import './App.css'; // Assuming you have your CSS here

function App() {
  return (
    <div className="App">
      <Navbar />
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
    </div>
  );
}

export default App;
