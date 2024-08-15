import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';



const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
  },
}));

const ServiceItem = styled(Typography)(({ theme }) => ({
  marginBottom: '0.5rem',
  fontSize: '0.9rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.75rem',
  },
}));

const ItemLink = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[800],
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

interface ServiceItemProps {
  title: string;
  items: string[];
}

const ServiceSection: React.FC<ServiceItemProps> = ({ title, items }) => (
  <Grid item xs={12} sm={6} md={4} lg={2}>
    <SectionTitle variant="h4">{title}</SectionTitle>
    {items.map((item, index) => (
      <ServiceItem key={index}>
        {index === 0 && item === 'Results'? (
          <ItemLink href="/results" >
            {item}
          </ItemLink>
        ) : (
          <ItemLink href="#" >
            {item}
          </ItemLink>
        )}
      </ServiceItem>
    ))}
  </Grid>
);

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 6, mt:"120px" }}>
      <Container maxWidth="lg" sx={{  }}>
        <Grid container spacing={2}>
         
          <Grid container spacing={2} justifyContent="center">
            <ServiceSection
              title="AGENCY"
              items={['Services', 'Results', 'Blog', 'Careers', 'Partner Program', 'Contact Us']}
            />
            <ServiceSection
              title="PAID ADVERTISING"
              items={['PPC Agency', 'Facebook Ads Agency', 'Google Ads Agency', 'SEM Agency', 'PPC Management', 'LinkedIn Ads Agency']}
            />
            <ServiceSection
              title="SEO"
              items={['Content Marketing Agency', 'SEO Agency', 'Link Building Services']}
            />
            <ServiceSection
              title="CONVERSION"
              items={['Conversion Rate Optimization', 'Landing Page Agency', 'Landing Page Design']}
            />
            <ServiceSection
              title="EMAIL MARKETING"
              items={['Email Marketing Agency']}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;