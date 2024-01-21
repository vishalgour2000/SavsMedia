import React from 'react'
import "./Savs.css"
const Savs = () => {
  return (
    <div>
        <header>
        <div class="container">
            <h1>Your Digital Marketing Agency</h1>
            <p>Driving Success in the Digital World</p>
        </div>
    </header>
    
        <div class="container">
            <section class="about-section">
                <div>
                    <h2>Who We Are</h2>
                    <p>Your Digital Marketing Agency is a team of passionate professionals dedicated to helping businesses thrive in the digital landscape. We specialize in creating effective strategies, innovative campaigns, and measurable results.</p>
                </div>
                <div>
                    <img src="agency-office.jpg" alt="Agency Office"></img>
                </div>
            </section>

            <section class="about-section">
                <div class="team-member">
                    <img src="team-member-1.jpg" alt="Team Member 1"></img>
                    <h3>John Doe</h3>
                </div>
                <div class="team-member">
                    <img src="team-member-2.jpg" alt="Team Member 2"></img>
                    <h3>Jane Smith</h3>
                </div>
            </section>

            <section class="mission-section">
                <h2>Our Mission</h2>
                <p>We are on a mission to empower businesses with the tools and strategies needed to succeed in the digital age. Our goal is to build long-lasting relationships with our clients and drive measurable results that contribute to their growth.</p>
            </section>

            <section class="icon-box">
                <i class="fas fa-chart-line"></i>
                <p>Data-Driven Strategies</p>
            </section>

            <section class="icon-box">
                <i class="fas fa-bullhorn"></i>
                <p>Creative Marketing Campaigns</p>
            </section>

            <section class="icon-box">
                <i class="fas fa-users"></i>
                <p>Engaging User Experiences</p>
            </section>
        </div>
    </div>
  )
}

export default Savs