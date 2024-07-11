import React,{ useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import './Hero.css'; // Import the CSS file for styling

const HeroSection = ({ onReferNowClick }) => {
    const [isModalOpen, setModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <Container maxWidth="sm" className="hero-container">
      <Typography variant="h2" className="hero-title" gutterBottom>
        Refer & Earn
      </Typography>
      {/* <Typography variant="h6" className="hero-description" paragraph>
        Invite your friends to join our course and earn rewards!
      </Typography> */}
      <Button
        variant="contained"
        color="primary"
        className="hero-button"
        onClick={onReferNowClick}
      >
        Refer Now
      </Button>
    </Container>
    
  );
};

export default HeroSection;
