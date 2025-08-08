import React from "react";
import "./ContactModal.css";
import { IoCloseCircle } from "react-icons/io5";
import { MdMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
const ContactModal = ({ heading, onClose }) => {
  return (
    <div className="contact-modal-parent">
      <div className="contact-modal">
        <div className="modal-top">
          <span>{heading}</span>
          <IoCloseCircle  onClick={onClose}/>
        </div>
        <div className="modal-mid">
          <form className="form-container">
            <div className="input-container">
              <input type="text" placeholder="Name*" />
              <input type="text" placeholder="Email Address*" />
              <PhoneInput id="phone" type="number" countryCodeEditable={true} />

              <textarea placeholder="Query/Training Requirement"></textarea>

              <div className="checkbox-container">
                <input type="checkbox" />
                <p>
                  By submitting your contact details, you acknowledge and agree
                  to our <span>Terms of Use</span> and
                  <span> Privacy Policy</span>.
                </p>
              </div>
              <div className="contact-btn">
                <p>Submit Now</p>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-bottom">
          <span>Connect with Us</span>
          <a href="#">
            <MdOutlinePhoneInTalk /> 0000-000-0000
          </a>
          <a href="#">
            <MdMailOutline />
            sales@dummy.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
