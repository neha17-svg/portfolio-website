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

  // ⭐ Technical Skills
  const techSkills = [
    { name: "React.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML & CSS", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Bootstrap", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Node.js", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Firebase", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MongoDB", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "C++", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  ];

  // 🧠 Soft Skills
  const softSkills = [
    { name: "Communication", level: 90, icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4ac.svg" },
    { name: "Problem Solving", level: 88, icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9e0.svg" },
    { name: "Analytical Thinking", level: 85, icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c8.svg" },
    { name: "ChatGPT Usage", level: 95, icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f916.svg" },
    { name: "Teamwork", level: 90, icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f91d.svg" },
    { name: "Time Management", level: 85, icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/23f0.svg" },
  ];

  return (
    <section className="skills-section">
      <div className="container">

        {/* ⚡ Technical Skills Section */}
        <h2 className="skills-title reveal">💻 Technical Skills</h2>
        <p className="skills-intro reveal">
          I build modern & interactive web experiences using strong foundations ⚡
        </p>

        <div className="skills-grid">
          {techSkills.map((s, i) => (
            <div key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="skill-icon-container">
                <img src={s.icon} alt={s.name} className="skill-icon" />
              </div>
              <div className="skill-header">
                <h3>{s.name}</h3>
                <span className="percent">{s.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ "--w": `${s.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* 🧠 Soft Skills Section */}
        <h2 className="skills-title mt-5 reveal">🧠 Soft Skills</h2>
        <p className="skills-intro reveal">
          Great developers also have strong communication, discipline & mindset ✨
        </p>

        <div className="skills-grid">
          {softSkills.map((s, i) => (
            <div key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="skill-icon-container">
                {s.icon && <img src={s.icon} alt={s.name} className="skill-icon" />}
              </div>
              <div className="skill-header">
                <h3>{s.name}</h3>
                <span className="percent">{s.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ "--w": `${s.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
