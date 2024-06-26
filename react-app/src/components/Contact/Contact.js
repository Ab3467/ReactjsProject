import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

export default function Contact() {

    const [result, setResult] = React.useState("");    // this code copied from web3 form to submit FORM

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f85f1e9e-17f2-488a-8dc7-a1552cf1e9bc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="message icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail icon" />
            alex.ab345@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="phone icon" />
            +198765433
          </li>
          <li>
            <img src={location_icon} alt="location icon" />
            77 Massachusetts Ave, Cambridge, MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={6}
            required
          ></textarea>
          <button className="btn dark-btn" type="submit">
            Submit now <img src={white_arrow} alt="arrow icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
