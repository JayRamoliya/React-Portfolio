import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

const Contact = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        // Top-origin animation for '.reveal' and '.top-header'
        sr.reveal('.reveal', { origin: 'top' });
        sr.reveal('.top-header', { origin: 'top' });

        // Left-origin animation for '.contact-info'
        sr.reveal('.contact-info', { origin: 'left', delay: 100 });

        // Right-origin animation for '.form-control'
        sr.reveal('.form-control', { origin: 'right', delay: 100 });
    }, []); // Empty dependency array to run only once on mount

    return (
        <>
            <section className="section" id="contact">
                <div className="top-header">
                    <h1>Get in touch</h1>
                    <span>Do you have a project in your mind, contact me here</span>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="contact-info">
                            <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>
                            <p><i className="uil uil-envelope"></i> Email: ramoliyajay9@gamil.com</p>
                            <p><i className="uil uil-phone"></i> +91 63537 16421</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-control">
                            <div className="form-inputs">
                                <input type="text" className="input-field" placeholder="Name" />
                                <input type="text" className="input-field" placeholder="Email" />
                            </div>
                            <div className="text-area">
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div className="form-button">
                                <button className="btn">Send <i className="uil uil-message"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact