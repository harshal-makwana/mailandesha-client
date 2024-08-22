import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography,Box } from '@mui/material';

const Body: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [emailContent, setEmailContent] = useState<string | null>(null);

  const generateEmailContent = async (prompt: string): Promise<string> => {
    try {
      const response = await axios.post('https://mailandesha.onrender.com/api/generate-email',{prompt});
      return response.data.generatedText;
    } catch (error) {
      console.error('Error generating email content:', error);
      return 'An error occurred while generating the email content.';
    }
  };

  const handleGenerateEmail = async () => {
    const content = await generateEmailContent(prompt);
    setEmailContent(content);
  };

  return (
    <Box sx={{ p: 2 }} maxWidth={"sm"} marginInline={"auto"} mt={"45px"}>
        <Typography variant='h4' fontWeight={700}>
        Now generate content for your email from here 
        </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter the prompt for your email..."
        variant="outlined"
        sx={{ mb: 2 ,mt:"30px"}}
      />
      <Button
        variant="contained"
        color="error"
        onClick={handleGenerateEmail}
      >
        Generate Email
      </Button>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight={700}>Generated Email Content:</Typography>
        <Box sx={{border:"0.5px solid grey",padding:"15px",borderRadius:"5px",mt:"10px"}} minHeight={"150px"}>
        <Typography>{emailContent?emailContent:<p style={{color:"grey"}}>Your Email Will appear here</p>}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Body;
