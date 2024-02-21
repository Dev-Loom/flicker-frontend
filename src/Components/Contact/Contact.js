import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-semibold  text-gray-800 mb-4">Our Branches</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Contact Details */}
        <div className="contact-info">
          <h3 className="text- font-semibold text-gray-800 mb-4">Vijayanagar</h3>
          <div className="map-container">
            <iframe
              title="Location Map"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124430.10443503436!2d77.48875089303496!3d12.943623714685037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3de1d05cc33d%3A0x73b233f7171c5fb!2sFlicker%20Fantasy%20Private%20Theatre!5e0!3m2!1sen!2sin!4v1704473727690!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-details">
            <div className="address-line">
              <strong>595, Govindaraja Nagar Ward,</strong>
            </div>
            <div className="address-line">
              <strong>MC Layout, Opp Ganesh Gandhi Medicals,</strong>
            </div>
            <div className="address-line">
              <strong>Bengaluru, Karnataka 560040</strong>
            </div>
          </div>
        </div>

        {/* Second Contact Details */}
        <div className="contact-info">
          <h3 className="text- font-semibold text-gray-800 mb-4">Location 2</h3>
          <div className="map-container">
            <iframe
              title="Location Map"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124430.10443503436!2d77.48875089303496!3d12.943623714685037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3de1d05cc33d%3A0x73b233f7171c5fb!2sFlicker%20Fantasy%20Private%20Theatre!5e0!3m2!1sen!2sin!4v1704473727690!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-details">
            <div className="address-line">
              <strong>595, Govindaraja Nagar Ward,</strong>
            </div>
            <div className="address-line">
              <strong>MC Layout, Opp Ganesh Gandhi Medicals,</strong>
            </div>
            <div className="address-line">
              <strong>Bengaluru, Karnataka 560040</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
