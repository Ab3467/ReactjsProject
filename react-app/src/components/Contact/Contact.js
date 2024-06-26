import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-iocn.png"
import phone_icon from "../../assets/phone-icon.png"

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />alex.ab345@gmail.com</li>
            <li><img src={phone_icon} alt="" />+198765433</li>
            <li>77 Massachusetts Ave, Cambridge
            MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">

      </div>
    </div>
  );
}
