import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          background: '#323133',
          pt: 0.2,
          pb: 0,
        }}
      >
        {/* Footer */}
        <Box
          sx={{
            background: 'linear-gradient(to top, #f1f1f1, #f1f1f1)',
            p: 2,
          }}
          component='footer'
        >
          <Typography
            variant='h6'
            align='center'
            gutterBottom
            color='text.secondary'
          >
            GlobalLogic
          </Typography>

          <Typography
            variant='subtitle1'
            align='center'
            color='text.secondary'
            component='p'
          >
            Built with ❤ Vernie Thorpe
          </Typography>
        </Box>
        {/* End footer */}
      </AppBar>
    </Box>
  );
};

export default Footer;
