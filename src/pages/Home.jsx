import React, { useEffect } from "react";
import "./PageStyle.css";

export default function Home() {
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
    return () => {
      box.removeEventListener("mousemove", handleMouseMove);
      box.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <div className="hero-container fade-in">
      <div className="hero-section">
        <h1 className="typing-text">Hi, I’m Neha 👋</h1>
        <p className="tagline">
          Crafting digital experiences that feel <span className="magic-word">alive ✨</span>
        </p>
        <p className="sub-text">
          I’m a web developer who believes simplicity is powerful — and design
          should always tell a story. I love building smooth, creative, and
          responsive websites that make people stop and feel something 💻💛
          Even interseted in cybersecurity and AI.
        </p>
        <a href="/projects" className="btn btn-warning btn-lg mt-4 glow">
          🚀 View My Work
        </a>

        <div className="bottom-tagline mt-5">
          <p>🌿 <strong>Less clutter. More clarity.</strong> 🌿</p>
        </div>
      </div>
    </div>
  );
}




