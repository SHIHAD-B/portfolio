import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="hero section">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container">
                <div className="hero-content animate-fadeInUp">
                    <div className="hero-badge">
                        <span>👋 Welcome to my portfolio</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text"> Shihad B</span>
                    </h1>

                    <h2 className="hero-subtitle">
                       Full Stack Developer | MERN Stack | Frontend Engineer
                    </h2>

                    <p className="hero-description">
                        Experienced Full Stack Developer skilled in MERN stack, Next.js, and microservices, delivering scalable, clean, and production-ready applications with strong problem-solving skills, rapid development (97+ WPM), and a passion for modern web technologies.
                    </p>

                    <div className="hero-cta">
                        <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                            View My Work
                            <FiArrowDown />
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                            Get In Touch
                        </button>
                    </div>

                    <div className="hero-social">
                        <a href="https://github.com/SHIHAD-B" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FiGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/shihadb/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FiLinkedin size={24} />
                        </a>
                        <a href="mailto:shihadb0@gmail.com" className="social-link">
                            <FiMail size={24} />
                        </a>
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default Hero;
