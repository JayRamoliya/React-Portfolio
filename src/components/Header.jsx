import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
    // State to manage the shadow and height of the header
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Function to handle scroll and add shadow
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // State to control the responsive class
    const [isResponsive, setIsResponsive] = useState(false);
    useEffect(() => {
        // Function to handle scroll and set active link
        const scrollActive = () => {
            const scrollY = window.scrollY;
            const sections = document.querySelectorAll('section[id]');

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');

                const link = document.querySelector(`.nav-menu a[href*='${sectionId}']`);
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    link.classList.add('active-link');
                } else {
                    link.classList.remove('active-link');
                }
            });
        };

        // Add scroll event listener
        window.addEventListener('scroll', scrollActive);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', scrollActive);
        };
    }, []);

    // Create a ref for the navigation menu
    const navMenuRef = useRef(null);

    // Function to toggle the menu
    const myMenuFunction = () => {
        if (navMenuRef.current) {
            navMenuRef.current.classList.toggle('show');
        }
        setIsResponsive(!isResponsive);
    };


    return (
        <>
            <nav id="header"
                style={{
                    boxShadow: isScrolled ? '0 1px 6px rgba(0, 0, 0, 0.1)' : 'none',
                    height: isScrolled ? '70px' : '90px',
                    lineHeight: isScrolled ? '70px' : '90px',
                    transition: 'all 0.3s ease',
                }}
            >
                <div className="nav-logo">
                    <p className="nav-name">Jay</p>
                    <span>.</span>
                </div>
                <div className={`nav-menu ${isResponsive ? 'responsive' : ''}`} id="myNavMenu" ref={navMenuRef}>
                    <ul className="nav_menu_list">
                        <li className="nav_list">
                            <a href="#home" className="nav-link active-link">Home</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav_list">
                            <a href="#about" className="nav-link">About</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav_list">
                            <a href="#projects" className="nav-link">Projects</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav_list">
                            <a href="#contact" className="nav-link">Contact</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav_list">
                            <a href="#work" className="nav-link">Work</a>
                            <div className="circle"></div>
                        </li>
                    </ul>
                </div>
                <div className="nav-menu-btn">
                    <i className="uil uil-bars" onClick={myMenuFunction}></i>
                </div>
            </nav>
        </>
    )
}

export default Header