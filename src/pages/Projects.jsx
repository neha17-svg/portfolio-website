import React, { useEffect } from "react";
import "./ProjectsStyle.css";

export default function Projects() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".proj-reveal");
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

  const projects = [
    {
      id: 1,
      title: "🩸 Blood Donor Finder",
      desc: "Real-time donor network using Twilio, EmailJS, and cloud database — instantly alerts nearby donors via SMS, call, and email, and tracks live donor availability. Designed for real impact in emergencies.",
      highlight: true,
      tech: ["React", "Twilio", "EmailJS", "Cloud", "Live Tracking"],
    },
    {
      id: 2,
      title: "💻 Responsive React Portfolio",
      desc: "Elegant, mobile-friendly portfolio built with React and Bootstrap. Smooth animations, clean layout, and dark-gold aesthetic — perfectly presenting skills and creativity.",
      tech: ["React", "Bootstrap", "Responsive"],
    },
    {
      id: 3,
      title: "🎓 Career Guidance Platform",
      desc: "AI-driven website helping students discover, review, and connect with colleges. Includes an interactive chat assistant and user review system for career clarity.",
      tech: ["React", "AI Chat", "Firebase", "UX Design"],
    },
    {
      id: 4,
      title: "🧩 Mini Projects & UI Clones",
      desc: "A bundle of polished mini apps: todo lists, calculators, and creative UI/UX clones — crafted to refine design precision and logic-building skills.",
      tech: ["HTML/CSS", "JavaScript", "React"],
    },
  ];

  return (
    <section className="projects-section">
      <div className="animated-bg"></div>
      <div className="sparkles"></div>
      <div className="container">
        <h2 className="projects-title">🚀 Featured Projects</h2>
        <p className="projects-intro">
          Crafted with creativity, innovation, and passion — every project reflects my journey in
          tech and design 💛
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`project-card proj-reveal ${p.highlight ? "highlight" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="card-header">
                <h3>{p.title}</h3>
              </div>
              <p className="proj-desc">{p.desc}</p>

              <div className="tech-stack">
                {p.tech.map((t) => (
                  <span className="tech" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

