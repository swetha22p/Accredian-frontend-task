import React from 'react';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './FAQ.css'; // Import the CSS file for styling

const FAQ = () => {
  return (
    <div className="faq">
      <div className="f-container">
        <p className='faqhead'>
          Frequently Asked <span style={{ color: "#1A73E8" }}>Questions</span>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div className='faqbutton'>
            <button className="b1" style={{ color: "#1A73E8" }}>Eligibility</button>
            <button className="b2">How to Use?</button>
            <button className="b3">Terms & Conditions</button>
          </div>
          <div className='faqcontent'>
            <p className="p1">
              Do I need to have prior Product Management and Project Management experience to enroll in the program?
            </p>
            <p className="p2">
              No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
            </p>
            <p className="p3">What is the minimum system configuration required?</p>
          </div>
        </div>
       
      </div>
      <div className="footer">
        <div className='white'>
          <SupportAgentIcon style={{ fontSize: 80, marginBottom: 10 }} />
          </div>
          <div className='footer-content'>
          <p className="f1">Want to delve deeper into the program?</p>
          <p className='f2'>Share your details to receive expert insights from our program team!</p>
          </div>
          <div className='footer-button'>
          <button className="get-in-touch">Get in touch</button>
          </div>
        </div>
    </div>
  );
};

export default FAQ;
