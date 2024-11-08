import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';


const Featured = () => {
    const typedRef = useRef(null);
    useEffect(() => {
        // Initialize Typed.js
        const typed = new Typed(typedRef.current, {
            strings: ['Full Stack Developer', 'WordPress Developer'],
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000,
            loop: true,
        });

        // Clean up Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array to run only once on mount


    useEffect(() => {
        const sr = ScrollReveal();

        sr.reveal('.reveal', {
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true 
        });

        sr.reveal('.featured-text-card', { delay: 0 });
        sr.reveal('.featured-name', { delay: 100 });
        sr.reveal('.featured-text-info', { delay: 200 });
        sr.reveal('.featured-text-btn', { delay: 200 });
        sr.reveal('.social_icons', { delay: 200 });
        sr.reveal('.featured-image', { delay: 300 });

    }, []); // Empty dependency array to run only once on mount
    return (
        <>
            {/* <!-- -------------- FEATURED BOX ---------------- --> */}
            <section className="featured-box" id="home">
                <div className="featured-text">
                    <div className="featured-text-card">
                        <span>Jay Ramoliya</span>
                    </div>
                    <div className="featured-name">
                        <p>I'm <span ref={typedRef} className="typedText"></span></p>
                    </div>
                    <div className="featured-text-info">
                        <p>Experienced frontend developer with a passion for creating visually stunning
                            and user-friendly websites.
                        </p>
                    </div>
                    <div className="featured-text-btn">
                        <button className="btn blue-btn">Hire Me</button>
                    </div>
                    <div className="social_icons">
                        <div className="icon">
                            <a target="_blank" href="https://www.instagram.com/jay_ramoliya133/">
                                <i className="uil uil-instagram"></i>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/jay-ramoliya-260567237/" target="_blank">
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://twitter.com/JayRamoliya133" target="_blank">
                                <i className="uil uil-twitter"></i>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://github.com/JayRamoliya" target="_blank">
                                <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src="/public/logo.png" alt="avatar" />
                    </div>
                </div>
                <div className="scroll-icon-box">
                    <a href="#about" className="scroll-btn">
                        <i className="uil uil-mouse-alt"></i>
                        <p>Scroll Down</p>
                    </a>
                </div>

            </section>
        </>
    )
}

export default Featured