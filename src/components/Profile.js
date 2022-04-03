import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Container>
      <br />
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <Item>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 5,
                  },
                }}
              >
                {isAuthenticated && (
                  <Typography className='column'>
                    {user?.picture && (
                      <img src={user.picture} alt={user?.name} />
                    )}
                    <h2>{user?.name}</h2>
                    <ul>
                      {Object.keys(user).map((objKey, i) => (
                        <li key={i}>
                          {objKey}: {user[objKey]}{' '}
                        </li>
                      ))}
                    </ul>
                  </Typography>
                )}
                <br />
              </Box>
            </Item>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Profile;
