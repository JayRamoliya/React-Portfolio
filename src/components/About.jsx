import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';


const About = () => {
    useEffect(() => {
        // Left-origin animations
        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        srLeft.reveal('.about-info', { delay: 100 });

        // Right-origin animations
        const srRight = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        srRight.reveal('.skills-box', { delay: 100 });
    }, []); // Empty dependency array to ensure this runs only once on mount

    useEffect(() => {
        const sr = ScrollReveal();

        sr.reveal('.reveal', {
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true 
        });

        sr.reveal('.top-header',{})

    }, []); // Empty dependency array to run only once on mount
    return (
        <>
            <section className="section" id="about">
                <div className="top-header">
                    <h1>About Me</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="about-info">
                            <h3>My introduction</h3>
                            <p>I am a skilled and professional developer specializing in the MERN stack, WordPress, WooCommerce, and Elementor. With a solid foundation in JavaScript, React, and backend technologies like Node.js and MongoDB, I create dynamic and responsive web applications. My expertise extends to building custom WordPress solutions, including WooCommerce integrations for e-commerce functionality and Elementor for visually stunning, easy-to-manage websites.
                            </p>
                            <div className="about-btn">
                                <button className="btn">Download CV <i className="uil uil-import"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Frontend</h3>
                            </div>
                            <div className="skills-list">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap</span>
                                <span>JavaScript</span>
                                <span>React JS</span>
                                <span>Bootstrap (CMS)</span>
                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Backend</h3>
                            </div>
                            <div className="skills-list">
                                <span>PHP</span>
                                <span>Node JS</span>
                                <span>Express JS</span>
                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Database</h3>
                            </div>
                            <div className="skills-list">
                                <span>MySQL</span>
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About