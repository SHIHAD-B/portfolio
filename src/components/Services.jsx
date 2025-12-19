import { FiCode, FiLayout, FiSmartphone, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <FiCode />,
            title: 'Web Development',
            description: 'Building responsive and performant web applications using modern technologies like React, Next js, and Node.js.',
            features: ['Custom Web Apps', 'Single Page Applications', 'Progressive Web Apps'],
        },
        {
            id: 2,
            icon: <FiLayout />,
            title: 'UI/UX Design',
            description: 'Creating beautiful, intuitive user interfaces with a focus on user experience and modern design principles.',
            features: ['Wireframing', 'Prototyping', 'Design Systems'],
        },
        {
            id: 3,
            icon: <FiSmartphone />,
            title: 'Responsive Design',
            description: 'Ensuring your website looks and works perfectly on all devices, from mobile phones to desktop computers.',
            features: ['Mobile-First Design', 'Cross-Browser Testing', 'Performance Optimization'],
        },
        {
            id: 4,
            icon: <FiTrendingUp />,
            title: 'SEO Optimization',
            description: 'Optimizing your website for search engines to improve visibility and drive organic traffic.',
            features: ['Technical SEO', 'Performance Optimization', 'Analytics Setup'],
        },
        {
            id: 5,
            icon: <FiUsers />,
            title: 'Consultation',
            description: 'Providing expert advice on web technologies, architecture, and best practices for your projects.',
            features: ['Code Review', 'Architecture Planning', 'Technology Selection'],
        },
        {
            id: 6,
            icon: <FiZap />,
            title: 'Performance Tuning',
            description: 'Improving website speed and performance through optimization techniques and best practices.',
            features: ['Code Optimization', 'Asset Compression', 'Caching Strategies'],
        },
    ];

    return (
        <section id="services" className="section">
            <div className="container-wide">
                <h2 className="section-title">Services</h2>
                <p style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)', color: 'var(--text-secondary)' }}>
                    What I can do for you
                </p>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                            <ul className="service-features">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
