import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Create from "./assets/create.svg";
import Innovate from "./assets/innovate.svg";
import Learn from "./assets/learn.svg";
import Hero from "./assets/pds-hero.png";
import Navbar from "./components/Navbar";
import "./App.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

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
            <div className="grid">
              <div>
                <h1>Product Design Sprint 2024</h1>
                <p className="purple">
                  March 8-10, 2024 | Hybrid Event - Virtual & Western University
                </p>
                <br />
                <p style={{ maxWidth: "600px" }}>
                  Develop your product management, design thinking, and
                  prototyping skills in a fun weekend-long competition.
                </p>
                <br />
                <p>
                  Open to all levels. Participate from anywhere in the world.
                </p>
                <button
                  role="link"
                  onClick={() => openInNewTab("https://forms.gle/naFRnnEqMeDTCf6P7")}
                >
                  Apply Now!
                </button>
                <p>Applications close March 4, 2024</p>
              </div>
              <div>
                <img src={Hero} />
              </div>
            </div>
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
          <section className="section" id="prizes">
            <h2>Prizes</h2>
            <p>Over $2K in Prizes! Stay tuned for details...</p>
          </section>
          <section className="section" id="partners">
            <h2>Partners</h2>
            <p>
              Thank you to our partners for making PDS possible! Come back soon
              for our partner list!
            </p>
          </section>
          {/* <section className="section" id="partners">
            <h2>Judges & Mentors</h2>
            <p>Thank you to our judges and mentors from companies like...</p>
          </section> */}
          <section className="section" id="faq">
            <h2>FAQ</h2>
            <Accordion>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      What exactly is PDS?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  Product Design Sprint (PDS) is a hackathon-style design case
                  competition. Teams of up to 4 compete in designing the best
                  solution to a given problem applying design thinking and UX/UI
                  design skills.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      What experience or skills do I need to participate?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  None! PDS is completely beginner-friendly. We have many
                  workshops and resources to teach you everything you need to
                  compete. Most of our participants are new to UX design and
                  Figma!
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Do I need to be a Western student to participate?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  Nope! You can join us from anywhere across the world and even
                  compete completely virtually! However, we do encourage
                  participants to join us in-person on March 9 for in-person
                  networking, resume review, food, and other activities -- it's
                  more fun!
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </section>
          <section className="section footer" id="contact">
            <h2>Are You Ready?</h2>
            <p>
              Free food, workshops, and networking in a fun-filled 36-hour
              competition.
            </p>
            <button
              role="link"
              onClick={() => openInNewTab("https://forms.gle/naFRnnEqMeDTCf6P7")}
            >
              Apply Now!
            </button>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
