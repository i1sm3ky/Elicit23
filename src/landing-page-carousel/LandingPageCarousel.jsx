import React from "react";
import { CG1, CG2, CG3, CG4, CG5, CG6, CG7, CG8 } from "./images/index";
import "./LandingPageCarousel.css";

export default function LandingPageCarousel() {
  const images = [CG1, CG2, CG3, CG4, CG5, CG6, CG7, CG8];

  return (
    <div className="box">
      {images.map((image, index) => (
        <span key={index} style={{ transform: `rotateY(${index * 45}deg) translateZ(var(--translate-z, 300px))` }}>
          <img src={image} alt="" />
        </span>
      ))}
    </div>
  );
}
