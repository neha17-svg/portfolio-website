import React, { useEffect } from "react";
import "./AboutStyle.css";

export default function About() {
  useEffect(() => {
    // Scroll animation reveal
    const reveals = document.querySelectorAll(".reveal");
    const onScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 120;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <h1 className="about-title">👩‍💻 About Me</h1>

        <p className="about-intro reveal">
          I’m <span className="highlight">Neha</span>, a passionate Computer Science student
          who loves turning ideas into impactful digital experiences. With a CGPA of{" "}
          <span className="highlight">9.1</span>, I balance creativity and logic to craft
          elegant, functional, and user-friendly designs that tell a story. I believe
          technology is the art of transforming imagination into reality ✨
        </p>

        {/* Education timeline */}
        <div className="edu-section reveal">
          <h2 className="section-heading">🎓 Education</h2>
          <div className="timeline">
            <div className="edu-card left">
              <div className="content">
                <h4>High School</h4>
                <p>G.G. Chitnis English Medium High School, Belgaum</p>
                <p><strong>Percentage:</strong> 94%</p>
              </div>
            </div>
            <div className="edu-card right">
              <div className="content">
                <h4>Pre-University College</h4>
                <p>KLE College of Nipani</p>
                <p><strong>Percentage:</strong> 91%</p>
              </div>
            </div>
            <div className="edu-card left">
              <div className="content">
                <h4>B.E. in Computer Science</h4>
                <p>3rd Year Student (present)| CGPA 9.1 (2nd year)</p>
              </div>
            </div>
          </div>
        </div>
