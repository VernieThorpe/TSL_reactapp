import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 12.5,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const PostCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt='' className='img' />
          <Box paddingX={1}>
            <a href={'/user/' + tour.id}>
              <Typography variant='subtitle1' components='h2'>
                {tour.name}
              </Typography>
            </a>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'centre',
              }}
            >
              <AccessTime sx={{ width: 14, height: 18.5 }} />
              <Typography variant='body2' component='p'>
                {tour.duration} hours
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default PostCard;
