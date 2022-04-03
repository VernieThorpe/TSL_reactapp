import React, { useState, useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import m_styles from '../styles/masonry.module.css';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Masonry from 'react-masonry-css';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        padding: (theme) => theme.spacing(0.5),
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

export default function CardPage(props) {
  const [posts, setPosts] = useState([]);

  const [open, setOpen] = React.useState(false);

  const [word, setWord] = useState('Messi');

  const handleClick = (props) => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  const [data1, setData1] = useState('');
  const [newWord, setNewWord] = useState([]);
  const [loading, setLoading] = useState(false);

  function getData(val) {
    setData1(val.target.value);
    console.log(val.target.value);
  }

  const onSubmit = () => {
    setNewWord(data1);
  };

  /*
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

   */

  /* 

  const getThePosts = async () => {
    const response = await fetch(
      `http://127.0.0.1:5000/socialsearcher/${newWord}`
    );
    const res = response.json();

    const data = await res;
    setPosts(data.posts);
    console.log(data);
  };

  useEffect(() => {
    getThePosts();
  }, []);


*/

  useEffect(() => {
    async function getThePosts() {
      setLoading(true);
      const response = await fetch(
        'http://54.147.157.233:8080/socialsearcher/' + newWord
      );

      const res = response.json();
      const data = await res;
      setPosts(data.posts);
      console.log(data);

      setLoading(false);
    }

    getThePosts();

    /*
    fetch(`http://127.0.0.1:5000/socialsearcher/${newWord}`).then((response) =>
      response
        .json()
        .then((data) => {
          setPosts(data.posts);
        })

        .catch((error) => 'Could not fetch API' + error)
    );


    */
  }, [newWord]);

  return (
    <div>
      <Box
        display='flex'
        sx={{
          background: 'linear-gradient(to top, #ffede4, #f1f1f1)',
          pt: 4,
          pb: 4,
        }}
      >
        <Box
          container
          m='auto'
          display='flex'
          spacing={0}
          alignItems='center'
          justifyContent='center'
        >
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
                type='text'
                onChange={getData}
              />

              <IconButton sx={{ p: '10px' }} onClick={onSubmit} disableRipple>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Container>
        </Box>
      </Box>

      <Box
        sx={{
          background: 'linear-gradient(to bottom, #ffede4, #ffede4)',
        }}
      >
        <Typography
          sx={{ pt: 2 }}
          component='h1'
          variant='h5'
          fontWeight='fontWeightLight'
          align='center'
        >
          {loading ? 'Loading...' : null}
        </Typography>

        <Box m='auto' style={{ width: '100%' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              p: 2,
              m: 0,
              background: 'linear-gradient(to bottom, #ffede4, #ffede4)',
              borderRadius: 3,
            }}
          >
            <Masonry
              breakpointCols={4}
              columnClassName={m_styles.mymasonrygrid_column}
              className={m_styles.mymasonrygrid}
            >
              {posts.map((post, index) => {
                const Network = post.network;
                const Sentiment = post.sentiment;

                return (
                  <div>
                    {Sentiment === 'positive' ? (
                      <Item
                        key={index}
                        sx={{
                          background: 'linear-gradient(to bottom, #fff, #fff)',
                          boxShadow: 4,
                          borderColor: 'lightgreen',
                          borderRadius: 2,
                          border: '4px solid',
                        }}
                      >
                        <CardContent key={post.postid}>
                          <CardHeader
                            avatar={
                              <Avatar alt='Remy Sharp' src={post.user.image} />
                            }
                            action={
                              <Typography sx={{ textAlign: 'center' }}>
                                {Network === 'twitter' ? (
                                  <Typography
                                    color='#00acee'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <TwitterIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'facebook' ? (
                                  <Typography
                                    color='#3b5998'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <FacebookIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'youtube' ? (
                                  <Typography
                                    color='#FF0000'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <YouTubeIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'instagram' ? (
                                  <Typography
                                    color='#833AB4'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <InstagramIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'reddit' ? (
                                  <Typography
                                    color='#FF4500'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <RedditIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'tumblr' ? (
                                  <Typography
                                    color='#34526f'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'flickr' ? (
                                  <Typography
                                    color='#0063dc'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'dailymotion' ? (
                                  <Typography
                                    color='#00d2f3'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'vimeo' ? (
                                  <Typography
                                    color='#86c9ef'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'vkontakte' ? (
                                  <Typography
                                    color='#4C75A3'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'web' ? (
                                  <Typography
                                    color='black'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : (
                                  <Typography
                                    color='black'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                )}
                              </Typography>
                            }
                            title={post.user.name}
                            subheader={post.posted.substr(0, 19)}
                          />
                          <Divider sx={{ m: 1 }} variant='middle' />

                          {post.image ? (
                            <CardMedia
                              component='img'
                              height='150'
                              image={post.image}
                            />
                          ) : null}
                          <br />
                          <Typography
                            sx={{ fontSize: 14 }}
                            color='text.secondary'
                            gutterBottom
                          >
                            {post.text}
                          </Typography>
                          <br />
                          <Link href={post.url}>
                            {post.url.substr(0, 30)}...
                          </Link>

                          {/*
                        <div>
                          <button
                            aria-describedby={id}
                            type='button'
                            onClick={handleClick}
                          >
                            More Info
                          </button>
                          <Popper id={id} open={open} anchorEl={anchorEl}>
                            <Box
                              sx={{
                                border: 1,
                                p: 1,
                                bgcolor: 'background.paper',
                              }}
                            >
                              {post.user.name}
                            </Box>
                          </Popper>
                        </div>
                        */}
                        </CardContent>
                      </Item>
                    ) : Sentiment === 'negative' ? (
                      <Item
                        key={index}
                        sx={{
                          background: 'linear-gradient(#fff, #fff)',
                          boxShadow: 4,
                          borderColor: 'lightcoral',
                          borderRadius: 2,
                          border: '4px solid',
                        }}
                      >
                        <CardContent key={post.postid}>
                          <CardHeader
                            avatar={
                              <Avatar alt='Remy Sharp' src={post.user.image} />
                            }
                            action={
                              <Typography sx={{ textAlign: 'center' }}>
                                {Network === 'twitter' ? (
                                  <Typography
                                    color='#00acee'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <TwitterIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'facebook' ? (
                                  <Typography
                                    color='#3b5998'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <FacebookIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'youtube' ? (
                                  <Typography
                                    color='#FF0000'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <YouTubeIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'instagram' ? (
                                  <Typography
                                    color='#833AB4'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <InstagramIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'reddit' ? (
                                  <Typography
                                    color='#FF4500'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <RedditIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'tumblr' ? (
                                  <Typography
                                    color='#34526f'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'flickr' ? (
                                  <Typography
                                    color='#0063dc'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'dailymotion' ? (
                                  <Typography
                                    color='#00d2f3'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'vimeo' ? (
                                  <Typography
                                    color='#86c9ef'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'vkontakte' ? (
                                  <Typography
                                    color='#4C75A3'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'web' ? (
                                  <Typography
                                    color='black'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : (
                                  <Typography
                                    color='black'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                )}
                              </Typography>
                            }
                            title={post.user.name}
                            subheader={post.posted.substr(0, 19)}
                          />
                          <Divider sx={{ m: 1 }} variant='middle' />

                          {post.image ? (
                            <CardMedia
                              component='img'
                              height='150'
                              image={post.image}
                            />
                          ) : null}
                          <br />

                          <Typography
                            sx={{ fontSize: 14 }}
                            color='text.secondary'
                            gutterBottom
                          >
                            {post.text}
                          </Typography>
                          <br />
                          <Link href={post.url}>
                            {post.url.substr(0, 30)}...
                          </Link>

                          {/*
                        <div>
                          <button
                            aria-describedby={id}
                            type='button'
                            onClick={handleClick}
                          >
                            More Info
                          </button>
                          <Popper id={id} open={open} anchorEl={anchorEl}>
                            <Box
                              sx={{
                                border: 1,
                                p: 1,
                                bgcolor: 'background.paper',
                              }}
                            >
                              {post.user.name}
                            </Box>
                          </Popper>
                        </div>
                        */}
                        </CardContent>
                      </Item>
                    ) : (
                      <Item
                        key={index}
                        sx={{
                          background: 'linear-gradient(#fff, #fff)',
                          boxShadow: 4,
                          borderColor: 'grey.500',
                          borderRadius: 2,
                          border: '4px solid',
                        }}
                      >
                        <CardContent key={post.postid}>
                          <CardHeader
                            avatar={
                              <Avatar alt='Remy Sharp' src={post.user.image} />
                            }
                            action={
                              <Typography sx={{ textAlign: 'center' }}>
                                {Network === 'twitter' ? (
                                  <Typography
                                    color='#00acee'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <TwitterIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'facebook' ? (
                                  <Typography
                                    color='#3b5998'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <FacebookIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'youtube' ? (
                                  <Typography
                                    color='#FF0000'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <YouTubeIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'instagram' ? (
                                  <Typography
                                    color='#833AB4'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <InstagramIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'reddit' ? (
                                  <Typography
                                    color='#FF4500'
                                    sx={{ fontSize: 24 }}
                                  >
                                    <RedditIcon sx={{ fontSize: 36 }} />
                                  </Typography>
                                ) : Network === 'tumblr' ? (
                                  <Typography
                                    color='#34526f'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'flickr' ? (
                                  <Typography
                                    color='#0063dc'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'dailymotion' ? (
                                  <Typography
                                    color='#00d2f3'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'vimeo' ? (
                                  <Typography
                                    color='#86c9ef'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'vkontakte' ? (
                                  <Typography
                                    color='#4C75A3'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : Network === 'web' ? (
                                  <Typography
                                    color='black'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                ) : (
                                  <Typography
                                    color='black'
                                    sx={{ fontSize: 24 }}
                                  >
                                    {post.network}
                                  </Typography>
                                )}
                              </Typography>
                            }
                            title={post.user.name}
                            subheader={post.posted.substr(0, 19)}
                          />
                          <Divider sx={{ m: 1 }} variant='middle' />

                          {post.image ? (
                            <CardMedia
                              component='img'
                              height='150'
                              image={post.image}
                            />
                          ) : null}

                          <br />

                          <Typography
                            sx={{ fontSize: 14 }}
                            color='text.secondary'
                            gutterBottom
                          >
                            {post.text}
                          </Typography>
                          <br />
                          <Link href={post.url}>
                            {post.url.substr(0, 30)}...
                          </Link>

                          {/* 
                        <div>
                          <button
                            aria-describedby={id}
                            type='button'
                            onClick={handleClick}
                          >
                            More Info
                          </button>
                          <Popper id={id} open={open} anchorEl={anchorEl}>
                            <Box
                              sx={{
                                border: 1,
                                p: 1,
                                bgcolor: 'background.paper',
                              }}
                            >
                              {post.user.name}
                            </Box>
                          </Popper>
                        </div>
                        */}
                        </CardContent>
                      </Item>
                    )}
                  </div>
                );
              })}
            </Masonry>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 3,
            m: 0,
            bgcolor: 'fff',
          }}
        >
          <Paper variant='outlined'>
            <Pagination
              sx={{
                marginTop: 1,
                marginBottom: 1,
                marginRight: 1,
                marginLeft: 1,
              }}
              count={10}
              variant='outlined'
            />
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
