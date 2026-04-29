import { AppBar, Toolbar, Typography, Button, Container, Box, useScrollTrigger } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children as React.ReactElement<any>, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
      backdropFilter: trigger ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease-in-out',
    },
  });
}

import React from 'react';

const Navbar = () => {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src={logo} alt="Mythy Logo" style={{ height: '32px', marginRight: '8px', borderRadius:"10000px" }} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  letterSpacing: '.1rem',
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                Mythy
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button component={RouterLink} to="/" color="inherit">Home</Button>
              <Button component={RouterLink} to="/contact-us" color="inherit">Contact</Button>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ ml: 2 }}
                onClick={() => window.open('https://play.google.com/store', '_blank')}
              >
                Get App
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
