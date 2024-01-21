import React, { useEffect, useRef, useState } from 'react';
import "./Savsmedia.css";
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import img1 from '../photo/Section_1(img).jpg';
import img2 from '../photo/Savs-Favicon.jpeg'
const Savsmedia = () => {
    const [data,setData]=useState('')
   let value= useRef(null)

    useEffect(()=>{
        gsap.to(value.current, {
            scrollTrigger: {
                trigger: "header",
                start: "top top",
                end: "bottom",
                // scrub: "true"
                scrub: 1
            },
            fontSize: 60,
            left: 0,
            top: 10,
            color: "rgb(36, 30, 26)",
            duration: 1
        });
        
        gsap.to(".nav-ite", {
            scrollTrigger: {
                trigger: "header",
                start: "top top",
                end: "bottom",
                // scrub: "true"
                scrub: 1
            },
            color: "rgb(36, 30, 26)"
        });
    },[])
    
    
    
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li className="nav-list">
                            <a className="nav-item" href="#">Our Services</a>
                        </li>
                        <li class="nav-list">
                            <a class="nav-item" href="#">Our Philosophy</a>
                        </li>
                         <li  class="nav-list"><Link to="/savs"> About SAVS</Link></li>
                        <li class="nav-list"><a class="nav-item" href="#">Contact Us</a></li>
                    </ul>
                </nav>
                <div ref={value} id="logo">SAVS<span>_MEDIA</span></div>
                <Link to="/clientform"> <button class="lead-button" id="main-page">GET MORE LEADS</button></Link>
            </header>

            <section id="page-1">
                <div class="main-content">
                    <p id="intro-small">
                        <span class="logo-small">Welcome to SAVS<span class="logo-orange">_Media,</span></span>
                        <span>Your digital success starts here!</span>
                        Lets elevate your online presence with stunning web designs and amplify your reach through targeted paid advertising
                        <button class="lead-button" id="lb-page-1"><Link to="/clientform">GET MORE LEADS</Link></button>
                    </p>

                    <div>
                        <img src={img1} alt="section-img1" />
                    </div>
                </div>
            </section>

            <footer>
        <div class="container">
            <div class="footer-logo">
                <img src={img2} alt="Agency Logo"></img>
            </div>
            <ul class="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div class="footer-social">
                <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
            <div class="copyright">
                &copy; 2024 Savs-Me. All rights reserved.
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Savsmedia