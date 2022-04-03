import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button onClick={() => logout()} color='inherit'>
        Sign Out
      </Button>
    )
  );
};

export default LogoutButton;
