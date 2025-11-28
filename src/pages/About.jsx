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

        {/* Hackathons Section */}
        <div className="hackathon-section reveal">
          <h2 className="section-heading">🚀 Achievements & Hackathons</h2>
          <div className="hackathon-grid">
            <div className="hack-card">
              <h4>💡 DecodeX Hackathon — BMSIT</h4>
              <p>
                Participated in <span className="highlight">DecodeX</span> at BMSIT, giving tough
                competition to  teams with creative problem-solving and strong team
                collaboration.
              </p>
            </div>
            <div className="hack-card">
              <h4>🛡️ Capture The Flag — Online Challenges</h4>
              <p>
                Participated in multiple <span className="highlight">CTF</span> challenges, focusing
                on cybersecurity problem-solving, logic-based coding, and quick analytical thinking.
              </p>
            </div>
            <div className="hack-card">
              <h4>🎨 Pixel — UI/UX Design Competition</h4>
              <p>
                Designed modern and minimalist interfaces during the{" "}
                <span className="highlight">Pixel UI/UX Design</span> contest, showcasing creativity,
                precision, and aesthetic design thinking.
              </p>
            </div>
            <div className="hack-card">
              <h4>🏆 SIH Internal Hackathon</h4>
              <p>
                Represented my college in <span className="highlight">Smart India Hackathon</span>{" "}
                (Internal Round), building impactful solutions with innovative use of technology.
              </p>
            </div>
                      <div className="hack-card">
              <h4>🧠 Ideathon </h4>
              <p>
                Represented my college in <span className="highlight">College State level Ideathons</span>{" "}
                showcasing innovative ideas and problem-solving skills by partcipating in state level ideathons such as New Horizon college.
              </p>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="hobbies-section reveal">
          <h2 className="section-heading">💫 My Hobbies</h2>
          <div className="hobby-grid">
            <div className="hobby-card">🎵 Listening to Music</div>
            <div className="hobby-card">🎨 Painting & Sketching</div>
            <div className="hobby-card">⚽ Playing Football</div>
          </div>
        </div>

        <div className="quote-box reveal">
          <p className="quote">
            “Creativity is intelligence having fun.” — Albert Einstein 🌸
          </p>
        </div>
      </div>
    </section>
  );
}
