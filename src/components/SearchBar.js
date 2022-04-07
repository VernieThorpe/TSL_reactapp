import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container, Input } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function SearchBar(props) {
  const [data, setData] = useState(null);

  function getData(val) {
    setData(val.target.value);
    console.log(val.target.value);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Container>
      <Typography
        sx={{ pt: 2 }}
        component='h1'
        variant='h3'
        fontWeight='fontWeightMedium'
        align='center'
      >
        The SocialLens 🔎
      </Typography>
      <Typography
        sx={{ pt: 2 }}
        component='h1'
        variant='h5'
        fontWeight='fontWeightLight'
        align='center'
      >
        Enter your query:
      </Typography>

      <Paper
        component='form'
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 400,
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <TextField
          sx={{ ml: 0, flex: 1, fontSize: 25 }}
          placeholder='Search'
          inputProps={{ 'aria-label': 'search google maps' }}
          type='text'
          onChange={getData}
        />

        <Button onClick={() => props.changeWord(data)}>Search</Button>
        <IconButton sx={{ p: '10px' }} disableRipple href='/card-page'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}
