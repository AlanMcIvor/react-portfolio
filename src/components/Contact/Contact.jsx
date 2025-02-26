import React from "react";
import "./Contact.css";
import { Title } from "../SectionTitle/Title";
import contact from "./assets/contact.png";
import { ContactForm } from "../Form/ContactForm";

export function Contact() {
  return (
    <>
      <section>
        <div className="contact-container">
          <Title text="Contact" />

          <div className="contact-info">
            <div className="contact-img">
              <img src={contact} alt="Illustration" className="contact-image" />
            </div>
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
