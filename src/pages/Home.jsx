import React, { useEffect, useState } from "react";
import "./PageStyle.css";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";

export default function Home() {
  const navigate = useNavigate();
  const [showAI, setShowAI] = useState(false);

  useEffect(() => {
    const box = document.querySelector(".hero-section");
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 40;
      const y = (window.innerHeight / 2 - e.pageY) / 40;
      box.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };
    const resetTransform = () => {
      box.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };
    box.addEventListener("mousemove", handleMouseMove);
    box.addEventListener("mouseleave", resetTransform);

    setTimeout(() => setShowAI(true), 1500); // AI message

    return () => {
      box.removeEventListener("mousemove", handleMouseMove);
      box.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  const handleViewWork = () => {
    navigate("/projects");
  };

  return (
    <div className="hero-container fade-in">
      {/* 🌌 PARTICLE BACKGROUND */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: "#000" },
          particles: {
            number: { value: 50 },
            move: { speed: 1 },
            opacity: { value: 0.6 },
            size: { value: 3 }
          },
        }}
      />

     
   

      <div className="hero-section">
        <h1 className="typing-text">Hi, I’m Neha 👋</h1>

        {/* 📝 TYPEWRITER EFFECT */}
        <h2 className="typing-skill">
          <Typewriter
            options={{
              strings: [
                "Web Developer 💻",
                "AI Explorer 🤖",
                "Cybersecurity Learner 🔐",
                "Creative Thinker 🎨"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="tagline">
          Crafting digital experiences that feel <span className="magic-word">alive ✨</span>
        </p>

        <p className="sub-text">
          I’m a web developer who believes simplicity is powerful — and design
          should always tell a story. I love building smooth, creative, and
          responsive websites that make people stop and feel something 💻💛
          Even interseted in cybersecurity and AI.
        </p>

        {/* 🚀 BUTTON */}
        <button className="btn btn-warning btn-lg mt-4 glow" onClick={handleViewWork}>
          🚀 View My Work
        </button>

        
      </div>
    </div>
  );
}






