import * as React from 'react';

import Button from '@mui/material/Button';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth0 } from '@auth0/auth0-react';

const cards = [
  {
    title: 'Track social posts',
    content: '',
    thumbnail: 'https://i.ibb.co/sP5M4XT/Picture-1.png',
    alt: 'hand holding camera',
  },
  {
    title: 'Quick analysis',
    content: '',
    thumbnail: 'https://i.ibb.co/RDssQS9/Picture-2.png',
    alt: 'magnifying glass and chart',
  },
  {
    title: 'Detailed results',
    content: '',
    thumbnail: 'https://i.ibb.co/CmDDDw9/Picture-3.png',
    alt: 'pie chart and clipboard',
  },
];

const theme = createTheme({
  palette: {
    primary: {
      // blue primary
      main: '#ee5b2b',
      contrastText: '#fff',
    },
    secondary: {
      // purple secondary
      main: '#6e62f9',
    },
    error: {
      // red error
      main: '#f4365d',
    },
  },
  spacing: 10,
  divider: 'rgba(0,55,30,0.31)',
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontSize: 14,
    fontFamily: 'Lotto',
    fontWeightBold: 800,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function Home() {
  const { isLoading, error } = useAuth0();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* 
      <AppBar
        position='relative'
        style={{ background: '#b3e9d0', color: '#004928' }}
      >
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant='h6' color='inherit' noWrap>
            Test navbar
          </Typography>
        </Toolbar>
      </AppBar>
*/}
      <main>
        {/* Hero unit, bgcolor: "background.paper", */}
        <Box
          sx={{
            background: 'linear-gradient(to top, #ffede4, #fff)',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='md' align='center'>
            {/* Hero unit, bgcolor: "background.paper", 
            <Box
              component='img'
              sx={{
                width: '70%',
              }}
              src='https://i.ibb.co/mN0hN8W/meal.png'
            />
            */}
            <Typography
              sx={{ pt: 2 }}
              component='h1'
              variant='h3'
              fontWeight='fontWeightMedium'
              align='center'
              color='text.primary'
              gutterBottom
            >
              The{' '}
              <Box color='primary.main' display='inline'>
                SocialLens 🔎
              </Box>
            </Typography>

            <Typography
              variant='h5'
              align='center'
              color='text.secondary'
              sx={{ pt: 1 }}
              paragraph
            >
              Our search engine allows you to monitor all public social mentions
              in social networks and web. Quickly measure and track what people
              are saying about your company, brand, product, or service in one
              easy to use dashboard, which would streamline your online presence
              tracking efforts and be a huge time saver.
            </Typography>
            <Container maxWidth='sm' align='center'>
              {error && <p>Authentication Error</p>}
              {!error && isLoading && <p>Loading...</p>}
              {!error && !isLoading && (
                <>
                  <div>
                    {!isAuthenticated && (
                      <Button
                        onClick={() => loginWithRedirect()}
                        variant='contained'
                        size='large'
                        fullWidth='true'
                      >
                        Sign In
                      </Button>
                    )}
                    {isAuthenticated && (
                      <Button
                        href='/card-page'
                        variant='contained'
                        size='large'
                        fullWidth='true'
                      >
                        Start Searching
                      </Button>
                    )}
                  </div>
                </>
              )}
              {/* 
              <Stack
                sx={{ pt: 3 }}
                direction='row'
                spacing={2}
                justifyContent='center'
              >
                <Button
                  href='/SignUp'
                  variant='contained'
                  size='large'
                  fullWidth='true'
                >
                  Sign up
                </Button>

                <Button
                  href='/SignIn'
                  variant='outlined'
                  size='large'
                  fullWidth='true'
                >
                  Sign in
                </Button>
              </Stack>
              */}
            </Container>
          </Container>
        </Box>
        <Box
          sx={{
            background: 'linear-gradient(to top, #ffede4, #ffede4)',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='lg'>
            <Typography
              sx={{ pb: 4 }}
              component='h2'
              variant='h4'
              fontWeight='fontWeightMedium'
              align='center'
              color='text.primary'
              gutterBottom
            >
              <Box color='#323133' display='inline'>
                Monitor social mentions quickly
              </Box>
            </Typography>
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0',
                      background: 'linear-gradient(to top, #fff, #fff)',
                    }}
                  >
                    <CardMedia
                      component='img'
                      sx={{
                        // padding below
                        pb: '2%',
                        pt: '2%',
                        px: '10%',
                      }}
                      image={card.thumbnail}
                      alt={card.alt}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        align='center'
                        gutterBottom
                        variant='h5'
                        component='h2'
                        fontWeight='fontWeightMedium'
                      >
                        {card.title}
                      </Typography>
                      <Typography>{card.content}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
