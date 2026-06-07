import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import "../style/componentStyle/contact.css";

const contactItems = [
  {
    label: "Email",
    value: "alfianmuhammad34@gmail.com",
    link: "mailto:alfianmuhammad34@gmail.com",
    note: "Prefered for project inquiries",
  },
  {
    label: "LinkedIn",
    value: "Muhamad Alfian Widjaya",
    link: "https://www.linkedin.com/in/muhamad-alfian-widjaya-487174222/",
    note: "Connect with me professionally",
  },
  {
    label: "Instagram",
    value: "@m_alfianw",
    link: "https://instagram.com/m_alfianw",
    note: "Follow for updates and work snapshots",
  },
    {
    label: "GitHub",
    value: "alfianw",
    link: "https://github.com/alfianw",
    note: "Explore my projects and repositories",
  },
];

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_95k37c4",
        "template_7260d46",
        form.current,
        "92r_SBNMvAhNl-x_G"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully!");
          setToast({ visible: true, message: "Email sent successfully!", type: "success" });
          form.current.reset();
          window.setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 1500);
        },
        () => {
          setLoading(false);
          setStatus("Failed to send message. Try again.");
          setToast({ visible: true, message: "Failed to send email. Please try again.", type: "error" });
          window.setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 1500);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-top">
        <h2>Contact Me</h2>
        <p className="section-description">
          Send me a message directly using the form, or reach out through
          email, LinkedIn, or Instagram.
        </p>
      </div>

      {toast.visible && createPortal(
        <div className={`toast-popup ${toast.type}`}>
          {toast.message}
        </div>,
        document.body
      )}

      <div className="contact-grid">
        <div className="contact-panel">
          <p className="contact-panel-title">Contact Info</p>
          <div className="contact-cards">
            {contactItems.map((item) => (
              <article key={item.label} className="contact-card">
                <span className="contact-card-label">{item.label}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card-link"
                >
                  {item.value}
                </a>
                <p className="contact-card-note">{item.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="contact-form-panel">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="8"
                required
              />
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className={`status ${status.includes("success") ? "success" : "error"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;