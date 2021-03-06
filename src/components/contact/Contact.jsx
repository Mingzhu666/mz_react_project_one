import "./contact.scss"
import { useState } from "react";
import Footer from "../footer/Footer"

export default function Contact() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    const data = [
        {
            id: 1,
            title: "Call me",
            contact1: "999-888-777",
            contact2: "999-888-777",
        },
        {
            id: 2,
            title: "Email",
            contact1: "user@gmail.com",
            contact2: "contact@gmail.com",
        },
        {
            id: 3,
            title: "Location",
            contact1: "888 Tigerking Street",
            contact2: "Happy Planet",
        },
      ];
    return (
        <div className="contact" id="contact">
            <div className="top">
                <div className="left">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6705.769481776118!2d72.81378356918373!3d18.9575125379329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce11e62236dd%3A0xe2abf61db863f597!2sRoyal%20Opera%20House!5e0!3m2!1sen!2sau!4v1628572599808!5m2!1sen!2sau" style={{border:0}} loading="lazy" className="googleMap" title="googleContactMap"></iframe>
                    {data.map((d) => (
                        <div key={d.id} className="contactInfo">
                            <h3 className="contactSubtitle">{d.title}</h3>
                            <span className="contactText">{d.contact1}</span>
                            <span className="contactText">{d.contact2}</span>
                        </div>
                    ))}
                </div>
                <div className="right">
                    <h2>Contact</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="contactInputs nameInput" placeholder="Name"/>
                        <input type="text" className="contactInputs emailInput" placeholder="Email"/>
                        <textarea className="contactInputs messageInput" placeholder="Message"></textarea>
                        <button type="submit">Send Message</button>
                        {message && <span>Thanks, I'll reply ASAP : )</span>}
                    </form>
                </div>
            </div>
            <div className="bottom">
                <Footer/>
            </div>
        </div>
    )
}
