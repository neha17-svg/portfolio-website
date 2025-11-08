import React, { useEffect } from "react";
import "./ContactStyle.css";

export default function Contact() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const onScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="contact-section fade-in">
      <div className="container">
        <h1 className="contact-title">📬 Let’s Connect</h1>

        <p className="contact-intro reveal">
          I’d love to hear from you! Whether it’s about collaboration, design ideas, or
          just a friendly chat — feel free to reach out 💌  
          Let’s build something creative together!
        </p>

        <div className="contact-grid">
          <a
            href="mailto:nehadeepakmali17@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card reveal"
          >
            <div className="icon">✉️</div>
            <h4>Email</h4>
            <p>nehadeepakmali17@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/neha-mali"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card reveal"
          >
            <div className="icon">💼</div>
            <h4>LinkedIn</h4>
            <p>Neha Mali</p>
          </a>

          <a
            href="https://www.instagram.com/nehamali_17"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card reveal"
          >
            <div className="icon">📸</div>
            <h4>Instagram</h4>
            <p>@nehamali_17</p>
          </a>
        </div>

        <div className="footer-note reveal">
          <p>
            🌿 “Every connection begins with a simple message.”  
            <br />
            Crafted with 💛 by <span className="highlight">Neha</span>
          </p>
        </div>
      </div>
      <div className="floating-bg"></div>
     <a href="mailto:nehadeepakmali17@gmail.com" className="floating-btn">💬 Message Me</a>

    </section>
  );
}


