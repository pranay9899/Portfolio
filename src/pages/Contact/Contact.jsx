import React, { useState } from 'react'; // Imports React and the useState hook for managing component state.
import styles from './Contact.module.css'; // Imports CSS modules for styling the Contact component.

function Contact() {
    // State to manage the form input values (name, email, message).
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    // State to manage the status message displayed to the user after form submission.
    const [status, setStatus] = useState('');

    // Handles changes to form input fields, updating the formData state accordingly.
    const handleChange = (e) => {
        const { name, value } = e.target; // Destructures name and value from the event target.
        setFormData((prevData) => ({
            ...prevData, // Spreads the previous form data.
            [name]: value, // Updates the specific field that changed.
        }));
    };

    // Handles the form submission.
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default browser form submission behavior.
        setStatus('Sending...'); // Sets the status message to indicate submission is in progress.

        const form = e.target; // Gets the form element from the event.
        const url = form.action; // Retrieves the Formspree URL from the form's action attribute.
        const data = new FormData(form); // Creates a FormData object from the form, which is suitable for fetch requests.

        try {
            // Sends the form data to Formspree using the fetch API.
            const response = await fetch(url, {
                method: form.method, // Uses the method specified in the form (POST).
                body: data, // Attaches the FormData object as the request body.
                headers: {
                    'Accept': 'application/json' // Crucial header for Formspree to return a JSON response.
                }
            });

            if (response.ok) {
                // If the response is successful (status 200-299).
                setStatus('Message sent successfully! Thank you.'); // Sets a success message.
                setFormData({ name: '', email: '', message: '' }); // Clears the form fields.
            } else {
                // If the response indicates an error.
                const result = await response.json(); // Parses the JSON error response from Formspree.
                setStatus(result.error || 'Failed to send message. Please try again.'); // Displays the error message from Formspree or a generic one.
            }
        } catch (error) {
            // Catches any network errors or issues with the fetch operation.
            console.error('Error submitting form:', error); // Logs the error to the console.
            setStatus('Failed to send message. Network error.'); // Sets a network error message.
        }
    };


    return (
        <section className={styles.contactSection}>
            <h2 className={styles.heading}>Get In Touch</h2> {/* Main heading for the contact section. */}
            <p className={styles.subheading}>
                Have a question or want to work together? Fill out the form below or reach out directly.
            </p>

            <div className={styles.contactContent}>
                {/* Contact Form */}
                <form className={styles.contactForm} onSubmit={handleSubmit} action="https://formspree.io/f/mgvkjygr" method="POST">
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label> {/* Label for the name input. */}
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name} // Binds input value to state.
                            onChange={handleChange} // Handles input changes.
                            required // Makes the field mandatory.
                            className={styles.inputField} // Applies CSS module class.
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label> {/* Label for the email input. */}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email} // Binds input value to state.
                            onChange={handleChange} // Handles input changes.
                            required // Makes the field mandatory.
                            className={styles.inputField} // Applies CSS module class.
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label> {/* Label for the message textarea. */}
                        <textarea
                            id="message"
                            name="message"
                            rows="6" // Sets the number of visible text lines.
                            value={formData.message} // Binds input value to state.
                            onChange={handleChange} // Handles input changes.
                            required // Makes the field mandatory.
                            className={styles.textareaField} // Applies CSS module class.
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Send Message {/* Submit button for the form. */}
                    </button>
                    {/* Displays status messages (sending, success, error) to the user. */}
                    {status && <p className={styles.statusMessage}>{status}</p>}
                </form>

                {/* Direct Contact Information */}
                <div className={styles.contactInfo}>
                    <h3>Direct Contact</h3>
                    <p>Email: <a href="mailto:npranay9899@gmail.com">npranay9899@gmail.com</a></p> {/* Email link. */}
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/pranaynyalapatla/" target="_blank" rel="noopener noreferrer">pranaynyalapatla</a></p> {/* LinkedIn link. */}
                    <p>GitHub: <a href="https://github.com/pranay9899" target="_blank" rel="noopener noreferrer">pranay9899</a></p> {/* GitHub link. */}
                    <p>Location: Hyderabad, Telangana, India</p> {/* Location information. */}
                </div>
            </div>
        </section>
    );
}

export default Contact; // Exports the Contact component for use in other parts of the application.