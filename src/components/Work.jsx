import React, { useEffect } from 'react'
import { data } from '../assets/Data'
import ScrollReveal from 'scrollreveal';


const Work = () => {

    useEffect(() => {
        const slider = document.getElementById('slider');
        let scrollInterval;

        // Function to auto-scroll right continuously
        const autoScroll = () => {
            if (slider) {
                slider.scrollLeft += 1; // Adjust scroll speed by changing the increment
            }
        };

        // Start auto-scrolling
        const startAutoScroll = () => {
            scrollInterval = setInterval(autoScroll, 20); // Adjust scroll speed by changing interval time
        };

        // Stop auto-scrolling
        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        // Add event listeners to start/stop auto-scroll on hover
        slider.addEventListener('mouseenter', stopAutoScroll);
        slider.addEventListener('mouseleave', startAutoScroll);

        // Start auto-scroll initially
        startAutoScroll();

        // Cleanup on unmount
        return () => {
            clearInterval(scrollInterval);
            slider.removeEventListener('mouseenter', stopAutoScroll);
            slider.removeEventListener('mouseleave', startAutoScroll);
        };
    }, []);

    useEffect(() => {
        const sr = ScrollReveal();

        sr.reveal('.reveal', {
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true
        });

        sr.reveal('.top-header', {})

    }, []); // Empty dependency array to run only once on mount

    return (
        <>
            <section id='work'>
                <div className="top-header">
                    <h1>Work</h1>
                </div>
                <div className="slider-container">
                    <div id="slider" className="slider">
                        {data.map((item) => (
                            <div key={item.id} className='main-slider'>
                                <img className="slider-item" src={item.imageUrl} alt="slider item" />
                                <span className='demo-badge'><a href={item.demoLink} target='_blank'>Demo</a></span>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work