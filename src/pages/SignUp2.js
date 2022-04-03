import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const theme = createTheme();

export default function SignUp2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type='text'
                  fullWidth
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className='form-control'
                  label='Name'
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type='email'
                  fullWidth
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='form-control'
                  label='Email Address'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type='password'
                  fullWidth
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className='form-control'
                  label='Password'
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              onSubmit={handleSubmit}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/SignIn' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
