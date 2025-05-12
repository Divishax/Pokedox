import React from 'react';
import { CssBaseline, Box } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: '#f0f0f0',
          minHeight: '100vh',
          paddingTop: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
