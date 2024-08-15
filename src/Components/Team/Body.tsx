// src/pages/Team.tsx

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button } from '@mui/material';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Harshal Makwana',
    position: 'CEO',
    bio: 'Harshal leads the team with over 1 year of experience in the tech industry. His vision drives our company forward.',
    image: 'https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg',
  },
//   {
//     name: 'Jane Smith',
//     position: 'CTO',
//     bio: 'Jane is our tech wizard, overseeing all technical aspects of our platform. She ensures we stay ahead in innovation.',
//     image: '/images/jane_smith.jpg',
//   },
//   {
//     name: 'Alice Johnson',
//     position: 'Head of Marketing',
//     bio: 'Alice crafts our marketing strategies with creativity and precision, helping us connect with our audience effectively.',
//     image: '/images/alice_johnson.jpg',
//   },
  // Add more team members as needed
];

const Team: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '90px' }}>
      <Typography variant="h3" fontWeight={700} gutterBottom align="center">
        Meet Our Team
      </Typography>
      <Typography variant="h5" paragraph align="center">
        Our team is dedicated to bringing you the best email marketing solutions. Get to know the people behind the innovation.
      </Typography>
      
      <Grid container spacing={4} mt="60px" justifyContent={"center"}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                sx={{minHeight:"150px"}}
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {member.position}
                </Typography>
                <Typography variant="body2" paragraph>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ marginTop: '3rem', textAlign: 'center' }}>
        <Button variant="contained" color="error">
          Join Our Team
        </Button>
      </Box>
    </Container>
  );
}

export default Team;
