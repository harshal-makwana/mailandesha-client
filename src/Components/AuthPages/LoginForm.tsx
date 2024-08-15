import React, { useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Typography,
  Checkbox,
  Grid,
  FormControlLabel,
  Link,
  Divider,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from './features/AuthSlice'; // Import login action
import axios from 'axios';
import GoogleLoginButton from './GoogleLoginButton';

const theme = createTheme();

interface Props {
  handleFromLogin: () => void;
}

const LoginForm: React.FC<Props> = ({ handleFromLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch(); // Get dispatch function
  const isLargeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data.token,data.user);

        // Dispatch login action to update Redux state
        dispatch(login({ user: data.user, token: data.token }));

        // Redirect the user to the dashboard or another page
        window.location.href = '/';
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);
        alert(errorData.message || 'Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  // Handle login with Google
  const loginWithGoogle = async () => {
    try {
      const response = await axios.get('/api/auth/google');
      const { token, user } = response.data;

      // Dispatch login action to update Redux state
      dispatch(login({ user, token }));

      return { token, user };
    } catch (error) {
      console.error('Authentication error:', error);
      throw error;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <Typography variant="h4" textAlign="left" margin="normal" mt={3} fontSize="30px" fontWeight={800}>
          Sign in to your Mailandesha account
        </Typography>
        <Typography variant="body1" textAlign="left" margin="normal" fontWeight={400}>
          <span style={{ color: 'gray' }}>Don't have an account yet?</span>{' '}
          <Button color='error' onClick={handleFromLogin}>Sign Up</Button>
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  color="error"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Link href="#" color="error" variant="body2" style={{ textDecoration: 'none' }}>
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Box margin="normal">
          <Divider sx={{ marginBlock: 3 }}>
            <span style={{ color: 'gray' }}>or</span>
          </Divider>
        </Box>
        <Box
          display="flex"
          flexDirection={isLargeScreen ? 'row' : 'column'}
          gap={2}
        >
          <a style={{ width: '100%' }} onClick={loginWithGoogle}>
            <GoogleLoginButton />
          </a>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginForm;
