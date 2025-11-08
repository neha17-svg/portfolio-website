

import React, { useEffect } from "react";
import "./SkillsStyle.css";

export default function Skills() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const onScroll = () => {
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "HTML & CSS", level: 95 },
    { name: "Bootstrap / Tailwind", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "Firebase / Cloud", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Communication & Teamwork", level: 90 },
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="skills-title">💡 My Skills & Strengths</h2>
        <p className="skills-intro">
          I love creating <span className="highlight">beautiful</span>,{" "}
          <span className="highlight">functional</span> digital experiences — combining creativity
          and logic to bring ideas to life ✨
        </p>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="skill-header">
                <h3>{s.name}</h3>
                <span className="percent">{s.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${s.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
