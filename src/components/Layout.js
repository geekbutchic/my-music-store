import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <Fragment>
    <CssBaseline />
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box p={4} sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  </Fragment>
  );
};

export default Layout;