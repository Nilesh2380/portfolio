import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact-wrapper" id='contact'>  
      <h1 className="contact-heading">Contact</h1> 
      <section id="contact" className="contact-section">
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p> Nagpur,Maharashtra, India</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <p>749822091</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>nileshkhune22@navgurukul.org</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
