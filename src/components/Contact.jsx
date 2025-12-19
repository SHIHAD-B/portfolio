import { useState } from 'react';
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGithub,
    FiLinkedin,
    FiSend
} from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('error');
            setTimeout(() => setFormStatus(''), 3000);
            return;
        }

        setFormStatus('sending');

        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setFormStatus(''), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <FiMail />,
            label: 'Email',
            value: 'shihadb0@gmail.com',
            link: 'mailto:shihadb0@gmail.com',
        },
        {
            icon: <FiPhone />,
            label: 'Phone',
            value: '+971 562592273',
            link: 'tel:+971562592273',
        },
        {
            icon: <FiMapPin />,
            label: 'Location',
            value: 'United Arab Emirates',
            link: null,
        },
    ];

    const socialLinks = [
        {
            icon: <FiGithub />,
            label: 'GitHub',
            url: 'https://github.com/SHIHAD-B',
        },
        {
            icon: <FiLinkedin />,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/shihadb/',
        },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p
                    style={{
                        textAlign: 'center',
                        marginBottom: 'var(--spacing-2xl)',
                        color: 'var(--text-secondary)',
                    }}
                >
                    Have a project, freelance work, or job opportunity? Let’s connect.
                </p>

                <div className="contact-content">
                    <div className="contact-info-section">
                        <h3>Let’s talk</h3>
                        <p>
                            I’m open to full-time roles, freelance projects, and collaboration
                            opportunities. Feel free to reach out if you’d like to discuss an
                            idea or just say hello.
                        </p>

                        <div className="contact-info-list">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-info-item">
                                    <div className="contact-info-icon">
                                        {info.icon}
                                    </div>
                                    <div className="contact-info-content">
                                        <span className="contact-info-label">
                                            {info.label}
                                        </span>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="contact-info-value"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="contact-info-value">
                                                {info.value}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact-social">
                            <h4>Connect with me</h4>
                            <div className="contact-social-links">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-social-link"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project or opportunity..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={formStatus === 'sending'}
                        >
                            {formStatus === 'sending'
                                ? 'Sending...'
                                : 'Send Message'}
                            <FiSend />
                        </button>

                        {formStatus === 'success' && (
                            <div className="form-message success">
                                Message sent successfully! I’ll get back to you soon.
                            </div>
                        )}

                        {formStatus === 'error' && (
                            <div className="form-message error">
                                Please fill in all required fields.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
