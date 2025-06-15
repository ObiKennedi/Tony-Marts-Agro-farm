import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.scss";

function ContactForm() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm("service_eggrzip", "template_j8en4vl", form.current, "YH8Nhrpfa9HqK4kb_")
            .then(
                () => {
                    setSent(true);
                    setLoading(false);
                    form.current.reset();
                },
                (error) => {
                    console.error("FAILED...", error);
                    setLoading(false);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form" id="contact">
            <h2>Contact Us</h2>

            <label>
                Full Name
                <input type="text" name="user_name" required />
            </label>

            <label>
                Email Address
                <input type="email" name="user_email" required />
            </label>

            <label>
                Message
                <textarea name="message" rows="5" required />
            </label>

            <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && <p className="success">Your message has been sent!</p>}
        </form>
    );
}

export default ContactForm;
