import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';



const StyledButton = styled(Button)(({ theme }) => ({

    height : 60,
    width:200,
    '&:hover': {
      backgroundColor: theme.palette.error.main,
      color: 'white',
    },
  }));




export default function EmailCampaigns() {
  return (
    <Container sx={{display:"flex" , justifyContent:"center", alignItems:"center",mt:"45px"}}>
    <Grid container lg={10}>
     <Grid item md={6}>
     <Grid container direction="column"  >
     <Grid item py={1}> 
        <Typography fontWeight={800} variant='h2'>Create beautiful campaigns</Typography>
     </Grid>
     <Grid item py={1}> 
        <Typography variant='h6'>Pick from three editors to create engaging, responsive campaigns. 
            Use our drag & drop editor with interactive content blocks,
            get more personal with a rich-text email or build custom campaigns using the HTML editor.</Typography>
     </Grid>
     <Grid item py={2} xs={12} lg={12} alignItems="start">
      <StyledButton variant="outlined" color="error" href="/email-marketing-form" sx={{  border: '1px solid red', color: 'red' }}>
        click here to start
      </StyledButton>
     </Grid>
     </Grid>
     </Grid>
     <Grid item md={6}>
      <Grid container  sx={{display:"flex" , justifyContent:"center", alignItems:"center"}}>
        <Grid item>
            <img width="100%" src='https://www.mailerlite.com/img/containers/assets/features/drag-and-drop-editor/drag-and-drop-editor.jpg/f9df64b4ef4fbfb40228901567f4e25e.webp'></img>
        </Grid>
      </Grid>
     </Grid>
    </Grid>
    </Container>
  )
}
