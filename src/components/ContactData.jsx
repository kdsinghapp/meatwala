import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactData = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    restid: "1",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getData = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill in all the fields.",
      });
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(
        `https://partnermeatwala.com/api/Vendor/ContactUS`,
        formData
      );

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent successfully.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
      });
      console.error(error.response || error.message);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={getData}
        className="contact-form input-smoke ajax-contact"
      >
        <h2 className="sec-title">Get In Touch</h2>
        <div className="row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <i className="fal fa-user" aria-hidden="true" />
          </div>
          <div className="form-group col-md-6">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <i className="fal fa-envelope" aria-hidden="true" />
          </div>
          <div className="form-group col-md-6">
            <input
              type="tel"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <i className="fal fa-phone" aria-hidden="true" />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-12">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={3}
              className="form-control"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            <i className="fal fa-pencil" aria-hidden="true" />
          </div>
          <div className="form-btn col-12">
            <button
              type="submit"
              className="th-btn btn-fw"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
              <i className="fas fa-chevrons-right ms-2" />
            </button>
          </div>
        </div>
        <p className="form-messages mb-0 mt-3" />
      </form>
    </div>
  );
};

export default ContactData;
