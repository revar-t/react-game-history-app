import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
          <Typography variant="p" components="p" sx={{ fontSize: '0.75rem' }}>
          &copy;My Game History
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
