import React from 'react';
import Container from '../images/Container.png';
import Container1 from '../images/Container1.png';
import Container3 from '../images/Container3.png';
import './Details.css';

const Details = () => {
    return (
        <div className="Details">         
          <img src={Container1} alt="Container1" />
          <img src={Container} alt="Container" />
          <img src={Container3} alt="Container3" />
        </div>
      );
    };
    
export default Details;
