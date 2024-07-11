import React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import ReferralModal from './ReferralModel';
import './Benefits.css';

const rows = [
  { program: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
  { program: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
  { program: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { program: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { program: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { program: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { program: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' }
];

const BenefitsComponent = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={`main ${theme}`}>
      <p className="head">What Are The <span className="refer-text">Referral Benefits?</span></p>

      <div className="content">
        <div className="sidebar">
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem style={{ background: '#1A73E8', borderRadius: '4px', height: '70px', marginBottom: '10px' }} className="listhead" disablePadding button>
              <ListItemText primary="ALL PROGRAMS" />
              <ArrowForwardIcon />
            </ListItem>
            {['Product Management', 'Strategy & Leadership', 'Business Management', 'Fintech', 'Senior Management', 'Data Science', 'Digital Transformation', 'Business Analytics'].map((item, index) => (
              <ListItem key={index} className="custom-list-item" disablePadding button>
                <ListItemText primary={item} />
                <ArrowForwardIcon />
              </ListItem>
            ))}
          </List>
        </div>

        <div className="table-container">
          <TableContainer component={Paper} className="custom-table-container">
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead style={{ background: '#1A73E859', width: '921px', height: '58px', borderRadius: '14px 14px 0px 0px', fontFamily: 'Source Sans Pro', fontSize: '20px', fontWeight: 700, lineHeight: '24px', textAlign: 'left' }}>
                <TableRow>
                  <TableCell className="head" style={{ borderRight: '1px solid #aaa', borderBottom: '1px solid #aaa', color: 'white', fontFamily: 'Source Sans Pro', fontSize: '20px', fontWeight: 700, lineHeight: '24px', textAlign: 'left', width: '50%' }}>Programs</TableCell>
                  <TableCell align="right" className="head" style={{ borderRight: '1px solid #aaa', borderBottom: '1px solid #aaa', color: 'white', fontFamily: 'Source Sans Pro', fontSize: '20px', fontWeight: 700, lineHeight: '24px', textAlign: 'left' }}>Referrer Bonus</TableCell>
                  <TableCell align="right" className="head" style={{ borderBottom: '1px solid #aaa', color: 'white', fontFamily: 'Source Sans Pro', fontSize: '20px', fontWeight: 700, lineHeight: '24px', textAlign: 'left' }}>Referee Bonus</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ borderRight: '1px solid #aaa', borderBottom: 'none', fontFamily: 'Source Sans Pro', fontSize: '20px', fontWeight: 400, lineHeight: '24px', textAlign: 'left' }}><SchoolIcon style={{ marginRight: '5px', fontSize: '18px' }} />{row.program}</TableCell>
                    <TableCell align="right" style={{ borderRight: '1px solid #aaa', borderBottom: 'none', fontFamily: 'Source Sans Pro', fontSize: '20px', fontWeight: 400, lineHeight: '24px', textAlign: 'left' }}>{row.referrerBonus}</TableCell>
                    <TableCell align="right" style={{ borderBottom: 'none', fontFamily: 'Source Sans Pro', fontSize: '20px', fontWeight: 400, lineHeight: '24px', textAlign: 'left' }}>{row.refereeBonus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className="themeswitch">
        <span className="enroll">Enrolled</span>
        <Switch className="switch" checked={theme === 'dark'} onChange={handleThemeChange} />
      </div>

      <div className="refer-now-button">
        <Button style={{marginTop: '10px'}}variant="contained" color="primary" onClick={handleReferNowClick}>
          Refer Now
        </Button>
      </div>
      <ReferralModal open={isModalOpen} onClose={handleCloseModal} />

      <Button className="showmore" endIcon={<ExpandMoreIcon />}>
        Show More
      </Button>
    </div>
  );
};

export default BenefitsComponent;
