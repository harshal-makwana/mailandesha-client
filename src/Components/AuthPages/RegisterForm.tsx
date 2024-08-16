// src/components/RegisterForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Divider,  useMediaQuery } from '@mui/material';
import GoogleLoginButton from './GoogleLoginButton';



const RegisterForm: React.FC = () => {
  const isLargeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));

  const [formValues, setFormValues] = useState({
    company: '',
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    company: '',
    name: '',
    email: '',
    password: '',
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'company':
        return value ? '' : 'Company is required';
      case 'name':
        return value ? '' : 'Name is required';
      case 'email':
        return value ? '' : 'Email is required';
      case 'password':
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(value)
          ? ''
          : 'Password must contain at least 8 characters, one lowercase, one uppercase, and one number.';
      default:
        return '';
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Update form values
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Validate current field
    setFormErrors({
      ...formErrors,
      [name]: validateField(name, value),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate all fields before submission
    const errors = {
      company: validateField('company', formValues.company),
      name: validateField('name', formValues.name),
      email: validateField('email', formValues.email),
      password: validateField('password', formValues.password),
    };

    setFormErrors(errors);

    // Check if any errors exist
    const hasErrors = Object.values(errors).some((error) => error !== '');
    if (!hasErrors) {
      console.log('Form submitted successfully', formValues);
      // Perform form submission logic here

      try {
        const response = await fetch('https://mailandesha.onrender.com/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ company : formValues.company, name : formValues.name, email: formValues.email, password : formValues.password})
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      
    }
  };

  return (
    <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
      <Typography variant="h4" textAlign="left" margin="normal" mt={3} fontSize="30px" fontWeight={800}>Get started with a Forever Free plan</Typography>
      <Typography variant="body1" textAlign="left" margin="normal" fontWeight={400}>
        <span style={{ color: 'gray' }}>Sign up in seconds. No credit card required.</span>
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Company"
        name="company"
        value={formValues.company}
        onChange={handleChange}
        error={!!formErrors.company}
        helperText={formErrors.company}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        error={!!formErrors.name}
        helperText={formErrors.name}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email"
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        error={!!formErrors.email}
        helperText={formErrors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        error={!!formErrors.password}
        helperText={formErrors.password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="error"
        sx={{ mt: 2 }}
        disabled={Object.values(formErrors).some((error) => error !== '')}
      >
        Register
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
         <a style={{ width: '100%' }} >
          <GoogleLoginButton/>
          </a>
        {/* <a style={{ width: '100%' }} href="https://www.microsoft.com">
          <Button fullWidth variant="outlined" color="error">
            Microsoft
          </Button>
        </a> */}
      </Box>
    </Box>
  );
};

export default RegisterForm;
