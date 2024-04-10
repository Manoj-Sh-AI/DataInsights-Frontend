import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "77ee6411-208a-4866-b6d7-1e149b242918");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
    <div id="contact" className="contact" >
      <div className="contact-col">
        <h3>Send Us a Message</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          eveniet ab veniam repellendus quos quaerat! Eveniet repellendus
          perferendis ipsum minima facere atque ducimus, veniam ullam sequi nisi
          ut officiis animi.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@giberish.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" />
            456 Elm Avenue, Suite 101, Springville Heights, Anytown, India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit">Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
