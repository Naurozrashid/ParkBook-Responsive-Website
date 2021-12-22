import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
       <footer className="mt-5 text-white">
      <div className="row mx-5 py-5">
        <div className="col m-2">
          <div className="d-flex align-items-center">
            {/* <img src={footerlogo} alt="brand name" className="img-fluid" /> */}
            <h1>PARKZOON</h1>
          </div>
          <p>
          PARKZOON is the main point of reference for online parking reservation. Besides guaranteeing your best facilites, we do so at an unbeatable price, with discounts of up to 70% of the official price.
          </p>
        </div>

        <div className="col m-2 ms-lg-5">
          <h2 className="underline">Services</h2>
          <p>Pre-Booking of Parking slot</p>
          <p>Hourly Bokking</p>
          <p>Weekly Booking</p>
          <p>Monthly Booking</p>
        </div>

        <div className="col m-2">
          <h2 className="underline">Help & Support</h2>
          <p>Live Chat</p>
          <p>Privacy Policy</p>
          <p>Faqs</p>
        </div>

        <div className="col m-2">
          <h2 className="underline">Contacts</h2>
          <h6>
            <i className="fas fa-map-marker-alt"></i> 4967 Sardis Sta, Victoria
            8007, Montreal.
          </h6>
          <h6>
            <i className="fas fa-phone-alt"></i> +1 246-345-0695
          </h6>
          <h6>
            <i className="fas fa-paper-plane"></i> infoParkingzoon@gmail.com
          </h6>
          <div className="mt-3 fw-bold fs-3 icon-color d-flex">
            <a
              href="https://www.facebook.com/nauroz.rashid.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square "></i>
            </a>
            <a
              href="https://twitter.com/naurozrashid11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter "></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nauroz-rashid-5a873b172/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin "></i>
            </a>
            <a
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;