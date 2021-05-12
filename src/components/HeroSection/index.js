import React from "react"
import { Button } from "../Button/ButtonElements"
import "./HeroSection.css"

const HeroSection = () => (
  <div className="hero-container">
    <h1>Travel More</h1>
    <p>Plan your next trip today</p>
    <div className="hero-btns">
      <Button fontBig big primary>
        Get Started
      </Button>
    </div>
  </div>
)

export default HeroSection
