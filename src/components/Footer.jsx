import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="top-footer">
                    <p>Jay Ramoliya .</p>
                </div>
                <div className="middle-footer">
                    <ul className="footer-menu">
                        <li className="footer_menu_list">
                            <a href="#home">Home</a>
                        </li>
                        <li className="footer_menu_list">
                            <a href="#about">About</a>
                        </li>
                        <li className="footer_menu_list">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="footer_menu_list">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-social-icons">
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
                <div className="bottom-footer">
                    <p>Copyright &copy; <a href="#home" id='footer_name'>Jay Ramoliya</a> - All rights reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer