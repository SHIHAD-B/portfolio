import {
    FiCode,
    FiLayout,
    FiSmartphone,
    FiDatabase,
    FiGitBranch,
    FiTool,
    FiServer,
    FiCloud
} from 'react-icons/fi';
import './About.css';

const About = () => {
    const skills = [
        { name: 'Frontend Development (React / Next.js)', icon: <FiCode />, level: 90 },
        { name: 'UI / UX Implementation', icon: <FiLayout />, level: 85 },
        { name: 'Responsive & Mobile-First Design', icon: <FiSmartphone />, level: 92 },
        { name: 'Backend Development (Node.js)', icon: <FiServer />, level: 85 },
        { name: 'Database Design (MongoDB / PostgreSQL)', icon: <FiDatabase />, level: 82 },
        { name: 'Version Control & Collaboration', icon: <FiGitBranch />, level: 88 },
        { name: 'Cloud & Deployment', icon: <FiCloud />, level: 75 },
        { name: 'Problem Solving & Architecture', icon: <FiTool />, level: 90 },
    ];

    const stats = [
        { value: '2+ Years', label: 'Hands-on Experience' },
        { value: '100%', label: 'Commitment to Quality' },
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <h3>
                            Full Stack Developer focused on building scalable and high-performance web applications
                        </h3>

                        <p>
                            I am a Full Stack Developer with strong expertise in the MERN stack, Next.js, and modern
                            frontend engineering. I build clean, scalable, and production-ready applications with
                            a strong focus on performance, maintainability, and user experience.
                        </p>

                        <p>
                            I have hands-on experience developing end-to-end solutions including e-commerce platforms,
                            job portals, and microservices-based systems. My work involves crafting intuitive user
                            interfaces, building secure REST APIs, integrating payment gateways, and managing
                            real-world application flows.
                        </p>

                        <p>
                            I follow clean architecture principles and industry best practices while collaborating
                            effectively with cross-functional teams. I enjoy solving complex problems, learning new
                            technologies, and continuously improving my development workflow to deliver impactful
                            digital products.
                        </p>

                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <h4 className="stat-value gradient-text">{stat.value}</h4>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                         <div className="tech-stack">
                            <h4>Technologies I work with:</h4>
                            <div className="tech-tags">
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">Next.js</span>
                                <span className="tech-tag">TypeScript</span>
                                <span className="tech-tag">JavaScript</span>
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">Express.js</span>
                                <span className="tech-tag">MongoDB</span>
                                <span className="tech-tag">PostgreSQL</span>
                                <span className="tech-tag">Redux</span>
                                <span className="tech-tag">Tailwind CSS</span>
                                <span className="tech-tag">Docker</span>
                                <span className="tech-tag">Kubernetes</span>
                                <span className="tech-tag">AWS S3</span>
                                <span className="tech-tag">Nginx</span>
                                <span className="tech-tag">Git & GitHub</span>
                                <span className="tech-tag">CI/CD</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills-section">
                        <h3>Skills & Expertise</h3>

                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-card">
                                    <div className="skill-header">
                                        <div className="skill-icon">{skill.icon}</div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>

                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `100%` }}
                                        >
                                           
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
