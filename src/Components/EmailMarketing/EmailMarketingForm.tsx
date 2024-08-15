import * as React from 'react';
import {
  TextField,
  Typography,
  Button,
  Grid,
  InputLabel,
  Container,
  Stack,
  Box,
  Dialog,
  Divider,
  Input,
  IconButton,
  AppBar,
  Toolbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowForwardIos, ArrowForwardIosOutlined, Close } from '@mui/icons-material';
import EmailCampaign from '../assets/email_campaign.svg';
import { useNavigate } from 'react-router-dom';
import Papa from "papaparse";

const NavbarGlass = styled(AppBar)(({ theme }) => ({
  background: 'white',
  padding: '5px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  display: 'block',
  [theme.breakpoints.down('md')]: {
    padding: '5px',
  },
}));

const HalfTextField = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: "flex",
    flexDirection: "column",
  },
}));

const InnerField = styled(TextField)(({ theme }) => ({
  paddingTop: "10px",
  [theme.breakpoints.down('md')]: {
    width: "100%",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  height: 60,
  width: 200,
  '&:hover': {
    backgroundColor: theme.palette.error.main,
    color: 'white',
  },
}));

const EmailForm = () => {
  const [campaignName, setCampaignName] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [senderEmail, setSenderEmail] = React.useState('');
  const [preheader, setPreheader] = React.useState('');
  const [recipients, setRecipients] = React.useState<string[]>([]);
  const [file, setFile] = React.useState<FileList | null>(null);
  const [isDialogOpen, setDialog] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [formError, setFormError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleCampaignNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCampaignName(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleSenderEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenderEmail(event.target.value);
  };

  const handlePreheaderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPreheader(event.target.value);
  };

  const handleRecipientsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecipients(event.target.value.split(',').map((recipient) => recipient.trim()));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(event.target.files);
    setError(null);
    if (!selectedFile) return;
    const fileExtension = selectedFile.name.split('.').pop();
    if (fileExtension !== 'csv') {
      setError('Please select a CSV file');
      return;
    }

    Papa.parse(selectedFile, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        interface Customer {
          Email: string;
        }

        const emails = (results.data as Customer[]).map((item: Customer) => item.Email);
        setRecipients(emails);
        setDialog(false);
      },
      error: () => {
        alert('Error parsing CSV');
      },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation for empty fields
    if (!campaignName || !subject || !senderEmail || !preheader || recipients.length === 0) {
      setFormError('All fields are required.');
      return;
    }

    if (error || !file) return;

    const data = { state: { campaignName, senderEmail, subject, preheader, recipients } };
    navigate('/email-marketing-canvas', data);
  };

  return (
    <>
      <NavbarGlass position="fixed" color='success'>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', color: "black", gap: 1 }}>
            <Typography variant='body1' fontWeight={600}>Details</Typography>
            <ArrowForwardIosOutlined sx={{ color: "black", fontSize: "15px" }} />
            <Typography variant='body1' fontWeight={400}>Content</Typography>
            <ArrowForwardIos sx={{ color: "black", fontSize: "15px" }} />
            <Typography variant='body1' fontWeight={400}>Review and schedule</Typography>
          </Box>
        </Toolbar>
      </NavbarGlass>
      <Container sx={{ mt: 15 }}>
        <Typography variant='h3' display="block" fontWeight={700} mt={5}>
          Campaign details
        </Typography>
        <Typography variant='h6' fontWeight={500}>
          Enter 'Subject' and other sending details. Check preview on the side to see how your campaign will appear in the inbox.
        </Typography>
        <Grid container pt={5}>
          <Grid item xs={12} lg={6}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Box>
                  <InputLabel>Campaign name</InputLabel>
                  <TextField 
                    fullWidth 
                    sx={{ pt: 1 }} 
                    placeholder="Campaign name" 
                    onChange={handleCampaignNameChange} 
                    type='text'
                    error={formError && !campaignName ? true : false}
                    helperText={formError && !campaignName ? 'Campaign name is required' : ''}
                  />
                </Box>
                <Box>
                  <InputLabel>Subject</InputLabel>
                  <TextField 
                    fullWidth 
                    sx={{ pt: 1 }} 
                    placeholder="Subject" 
                    onChange={handleSubjectChange} 
                    type='text'
                    error={formError && !subject ? true : false}
                    helperText={formError && !subject ? 'Subject is required' : ''}
                  />
                </Box>
                <HalfTextField>
                  <InputLabel>Sender</InputLabel>
                  <InnerField 
                    sx={{ pt: 1, width: "50%" }} 
                    placeholder="Sender" 
                    onChange={handleSenderEmailChange} 
                    type='text'
                    error={formError && !senderEmail ? true : false}
                    helperText={formError && !senderEmail ? 'Sender email is required' : ''}
                  />
                  <InnerField 
                    sx={{ pt: 1, width: "50%" }} 
                    placeholder="Email" 
                    type='text'
                    error={formError && !senderEmail ? true : false}
                  />
                </HalfTextField>
                <Box>
                  <InputLabel>Preheader</InputLabel>
                  <TextField 
                    sx={{ pt: 1 }} 
                    fullWidth 
                    placeholder="Use this area to offer a short preview of your email's content" 
                    onChange={handlePreheaderChange} 
                    type='text'
                    error={formError && !preheader ? true : false}
                    helperText={formError && !preheader ? 'Preheader is required' : ''}
                  />
                </Box>
                <Box>
                  <InputLabel>Recipients</InputLabel>
                  <TextField
                    sx={{ pt: 1 }}
                    fullWidth
                    placeholder="Click to add your recipients"
                    type='text'
                    onChange={handleRecipientsChange}
                    InputProps={{
                      readOnly: true,
                    }}
                    onClick={() => setDialog(true)}
                    error={formError && recipients.length === 0 ? true : false}
                    helperText={formError && recipients.length === 0 ? 'Recipients are required' : ''}
                  />
                  <Dialog open={isDialogOpen} fullWidth>
                    <Box>
                      <IconButton onClick={() => setDialog(false)}>
                        <Close />
                      </IconButton>
                    </Box>
                    <Box sx={{ padding: 2 }}>
                      <Typography sx={{ pt: 2 }}>Add Recipients</Typography>
                      <Divider sx={{ color: "green" }} />
                      <Input type='file' sx={{ pt: 2 }} onChange={handleFileChange} error={!!error}/>
                      <Typography variant='body2' color="error" sx={{ pt: 2 }}>
                        {error?error:"**Upload .csv file with Email field**"}
                      </Typography>
                    </Box>
                    <Divider sx={{ color: "green" }} />
                  </Dialog>
                </Box>
                <Typography variant='body2' color="error">
                  {formError}
                </Typography>
                <StyledButton variant="outlined" color="error" type='submit' sx={{ border: '1px solid red', color: 'red' }}>
                  Next: content
                </StyledButton>
              </Stack>
            </form>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box>
              <img src={EmailCampaign} width="100%" alt="Email Campaign" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EmailForm;
