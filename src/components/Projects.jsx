import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ProjectCarousel from './ProjectCarousel';
import VideoPlayer from './VideoPlayer';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Techssouq | E-Commerce Platform (UAE)',
            description:
                'A production-ready e-commerce platform developed for the UAE market. Features product management, cart, orders, user authentication, and admin dashboard.',
            images: [],
            video: '/091446.mp4',
            tech: [
                'Next.js',
                'TypeScript',
                'MongoDB',
                'Tailwind CSS',
                'Appwrite',
                'Material UI',
            ],
            github: 'https://github.com/SHIHAD-B/TECHSSOUQ',
            demo: 'https://www.techssouq.com/',
            featured: false,
        },
        {
            id: 2,
            title: 'HireMeUp | Job Portal (Microservices)',
            description:
                'A full-featured job portal built using a microservices architecture. Includes job posting, applications, premium subscriptions, real-time chat, notifications, and video interviews.',
            images: [],
            video: '/1720154936292.mp4',
            tech: [
                'React',
                'Node.js',
                'Express.js',
                'MongoDB',
                'JWT',
                'Stripe',
                'WebRTC',
                'Kafka',
                'Docker',
                'Kubernetes',
                'Stripe',
                'Material UI',
            ],
            github: 'https://github.com/SHIHAD-B/HireMeUp_frontEnd', 
            demo: 'https://hiremeup-git-main-shihad-bs-projects.vercel.app/', 
            featured: false,
        },

        {
            id: 3,
            title: 'Clieo | E-Commerce Platform',
            description:
                'A scalable e-commerce platform with modern UI, product browsing, cart functionality, favorites, and secure order management.',
            images: [],
             video: '/1702872365536.mp4',
            tech: [
                'Ejs',
                'Express.js',
                'MongoDB',
                'Node.js',
                'Razorpay',
            ],
            github: 'https://github.com/SHIHAD-B/cleio',
            
            featured: false,
        }

    ];

    return (
        <section id="projects" className="section">
            <div className="container-wide">
                <h2 className="section-title">My Projects</h2>
                <p
                    style={{
                        textAlign: 'center',
                        marginBottom: 'var(--spacing-2xl)',
                        color: 'var(--text-secondary)',
                    }}
                >
                    A selection of real-world projects showcasing my full stack development skills,
                    system design experience, and production-level implementations.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="project-image">
                                {project.video ? (
                                    <VideoPlayer src={project.video} alt={project.title} />
                                ) : (
                                    <ProjectCarousel
                                        images={project.images}
                                        alt={project.title}
                                    />
                                )}
                            </div>

                            <div className="project-content">
                                {project.featured && (
                                    <span className="featured-badge">Featured</span>
                                )}
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-links-bottom">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link-btn"
                                    >
                                        <FiGithub size={20} /> Code
                                    </a>
                                    {project.demo && (
                                        <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link-btn"
                                        >
                                        <FiExternalLink size={20} /> Demo
                                    </a>
                                    )}
                                </div>

                                <div className="project-tech">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
