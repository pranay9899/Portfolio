import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [mobileCopyStatus, setMobileCopyStatus] = useState('');

    const resumePath = `${import.meta.env.BASE_URL}Resume.pdf`;
    const mobileNumber = "9346718265";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const form = e.target;
        const url = form.action;
        const data = new FormData(form);

        try {
            const response = await fetch(url, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('Message sent successfully! Thank you.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const result = await response.json();
                setStatus(result.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('Failed to send message. Network error.');
        }
    };

    const handleCopyMobile = async () => {
        try {
            await navigator.clipboard.writeText(mobileNumber);
            setMobileCopyStatus('Copied!');
            setTimeout(() => setMobileCopyStatus(''), 2000);
        } catch (err) {
            console.error('Failed to copy mobile number: ', err);
            setMobileCopyStatus('Failed to copy.');
            setTimeout(() => setMobileCopyStatus(''), 2000);
        }
    };

    return (
        <section className={styles.contactSection}>
            <h2 className={styles.heading}>Get In Touch</h2>
            <p className={styles.subheading}>
                Have a question or want to work together? Fill out the form below or reach out directly.
            </p>

            <div className={styles.contactContent}>
                {/* Contact Form */}
                <form className={styles.contactForm} onSubmit={handleSubmit} action="https://formspree.io/f/mgvkjygr" method="POST">
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={styles.textareaField}
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Send Message
                    </button>
                    {status && <p className={styles.statusMessage}>{status}</p>}
                </form>

                {/* Direct Contact Information and Resume Button */}
                <div className={styles.contactInfo}>
                    <h3>Direct Contact</h3> {/* Heading is now at the top */}
                    <p>Email: <a href="mailto:npranay9899@gmail.com">npranay9899@gmail.com</a></p>
                    <div className={styles.mobileContact}>
                        <p>Mobile: <span className={styles.mobileNumber}>{mobileNumber}</span></p>
                        <button onClick={handleCopyMobile} className={styles.copyButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </button>
                        {mobileCopyStatus && <span className={styles.copyStatus}>{mobileCopyStatus}</span>}
                    </div>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/pranaynyalapatla/" target="_blank" rel="noopener noreferrer">pranaynyalapatla</a></p>
                    <p>GitHub: <a href="https://github.com/pranay9899" target="_blank" rel="noopener noreferrer">pranay9899</a></p>
                    <p>Location: Hyderabad, Telangana, India</p>

                    {/* MOVED: Resume Download Button is now the last child here */}
                    <a
                        href={resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeButton}
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;