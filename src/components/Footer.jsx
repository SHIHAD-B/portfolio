import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3 className="gradient-text">Shihad B</h3>
                            <p>Building amazing web experiences with passion and precision.</p>
                        </div>

                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Connect</h4>
                            <ul className="footer-links">
    <li>
        <a
            href="https://github.com/SHIHAD-B"
            target="_blank"
            rel="noopener noreferrer"
        >
            GitHub
        </a>
    </li>
    <li>
        <a
            href="https://www.linkedin.com/in/shihadb/"
            target="_blank"
            rel="noopener noreferrer"
        >
            LinkedIn
        </a>
    </li>
    <li>
        <a href="mailto:shihadb0@gmail.com">
            Email
        </a>
    </li>
</ul>

                        </div>
                    </div>

                 
                </div>
            </footer>

           
            <button
                className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <FiArrowUp />
            </button>
        </>
    );
};

export default Footer;
