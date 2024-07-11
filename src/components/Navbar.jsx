// src/components/Navbar.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../images/acclogo.png';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Process', id: 'process' },
  { label: 'Benefits', id: 'benefits' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Details', id: 'details' },
];

const Navbar = () => {
  return (
    <AppBar component="nav" sx={{ bgcolor: 'white', color: 'black', position: 'fixed', top: 0, zIndex: 1300 }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="logo" style={{ height: '50px', width: 'auto', marginTop: '15px' }} />
        </Typography>
        {navItems.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            offset={-70} // Adjust this based on your navbar height
          >
            <Button sx={{ color: 'black' }}>
              {item.label}
            </Button>
          </ScrollLink>
        ))}
        <Button sx={{ color: 'white', bgcolor: 'black', ml: 2 }}>
          Login
        </Button>
        <Button sx={{ color: 'white', bgcolor: 'blue', ml: 2 }}>
          Try for Free
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
