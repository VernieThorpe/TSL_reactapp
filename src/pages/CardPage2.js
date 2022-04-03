import React, { useState, useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchBar from '../components/SearchBar';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#101010' : '#fff',
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        fontWeight: '700',
        typography: {
          fontSize: 14,
          fontFamily: 'Lotto',
          fontWeightBold: 800,
          fontWeightLight: 200,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
        },
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const CardPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/socialsearcher/').then((response) =>
      response.json().then((data) => {
        setPosts(data.posts);
      })
    );
  }, []);

  return (
    <div>
      <Box
        sx={{
          background: 'linear-gradient(to bottom, #f1f1f1, #f1f1f1)',
        }}
      >
        {' '}
        <div>
          <CardMedia
            component='img'
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 1920,
              height: 270,
            }}
            image='https://i.ibb.co/82CvYp5/nordwood-themes-c-NXqm-O0-Z24-U-unsplash.jpg'
            alt='image'
          />
        </div>
      </Box>
      <Box
        display='flex'
        sx={{
          background: 'linear-gradient(to top, #ffede4, #f1f1f1)',
          pt: 4,
          pb: 10,
        }}
      >
        {' '}
        <Box
          container
          m='auto'
          display='flex'
          spacing={0}
          alignItems='center'
          justifyContent='center'
        >
          <SearchBar />
        </Box>
      </Box>
    </div>
  );
};

export default CardPage;
