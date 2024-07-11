import React, { useState } from 'react';
import './Process.css'; // Import the CSS file
import ReferImage from '../images/referpage.png'; // Ensure the correct path for the image
import addperson from '../images/layer2.png';
import note from '../images/note.png';
import group from '../images/group.png';
import Hero from '../components/Hero';
import ReferralModal from './ReferralModel';

const Process = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="processcontainer">
      <p>How Do <span className="refer-text">I Refer?</span></p>
      <div className="container">
        <img src={ReferImage} alt="Refer" className="imageprocess" />
      </div>
      <div className="layer1">
        <div className="vector1">
          <img src={addperson} style={{ fontSize: 60, color: '#1A73E8', position: 'relative', left: '10px', top: '70px' }} />
          <div className="assignment">
            <img src={note} style={{ fontSize: 60, color: '#1A73E8', position: 'relative', left: '390px', top: '-10px' }} />
            <img src={group} style={{ fontSize: 60, color: '#1A73E8', position: 'relative', left: '780px', top: '-80px' }} />
          </div>
        </div>
        <p className="p1">Submit referrals easily via our website’s referral section.</p>
        <p className="p2">Earn rewards once your referral joins an Accredian program.</p>
        <p className="p3">Both parties receive a bonus 30 days after program enrollment.</p>
      </div>
      <Hero onReferNowClick={handleReferNowClick} />
      <ReferralModal open={isModalOpen} onClose={handleCloseModal} />
      {/* You can render your modal component here based on isModalOpen state */}
    </div>
  );
};

export default Process;
