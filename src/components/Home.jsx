import React, { useState } from 'react';
import './Home.css'; // Import the CSS file
import HomeImage from '../images/home1.png'; // Ensure the correct path
import Homemain from '../images/home2.png'; // Ensure the correct path
import ReferralModal from './ReferralModel'; // Import your ReferralModal component

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility

  const handleClick = () => {
    setModalOpen(true); // Open the modal when "Refer Now" button is clicked
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="Home">
      <div className="items">
        <ul>
          <li style={{ color: '#1A73E8' }}>Refer</li>
          <li>Benefits</li>
          <li>FAQ</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="rectangle">
        <div className="images">
          <img src={HomeImage} alt="Home Image" />
        </div>
        <div className="group">
          <h1>Let's Learn <br />& Earn</h1>
          <p>Get a chance to win <br /> up to <span className="highlight">Rs 15,000</span></p>
          <button onClick={handleClick} className="btext">Refer Now</button>
        </div>
        <div className="group2">
          <img src={Homemain} alt="Main Image" />
        </div>
        <img src={HomeImage} alt="mainsmall" className='mainsmall1' />
        <img src={HomeImage} alt="mainsmall" className='mainsmall2' />
        <img src={HomeImage} alt="mainsmall" className='mainsmall3' />
        <img src={HomeImage} alt="mainsmall" className='mainsmall4' />
      </div>

      {/* Render the modal component */}
      <ReferralModal open={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default Home;
