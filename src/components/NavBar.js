import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import Profile from '../components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  const { isLoading, error } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          background: '#323133',
          pt: 0,
          pb: 0,
        }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            href='/'
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/' underline='none' color='white'>
              SocialLens
            </Link>
          </Typography>

          <Button href='/CardPage' color='inherit'>
            <ManageSearchIcon />
            Search
          </Button>

          {auth && (
            <div>
              <Button color='inherit'>
                {isAuthenticated && (
                  <div>
                    <Button href='/Profile' color='inherit'>
                      <AccountBoxIcon />
                      Profile
                    </Button>
                  </div>
                )}
              </Button>

              <Button color='inherit'>
                {error && <p>Authentication Error</p>}
                {!error && isLoading && <p>Loading...</p>}
                {!error && !isLoading && (
                  <>
                    <AccountCircleIcon />
                    <LoginButton />
                    <LogoutButton />
                  </>
                )}
              </Button>

              {/* 
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                 
                  <Link href='/SignIn' underline='none'>
                    SignIn
                  </Link>
                  
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href='/SignUp' underline='none'>
                    SignUp
                  </Link>
                </MenuItem>
              </Menu>
              */}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
