import { Box, Container, Typography } from '@mui/material'
import img from '../assets/feeling_proud.svg'

export default function Body() {
  return (
    <Container>
    <Box mt={"120px"} maxWidth="md" marginInline="auto" maxHeight="200px">
        <img src={img} width="100%" style={{maxHeight:"300px"}}/>
       <Typography textAlign={"center"} fontWeight={700}  sx={{fontSize:{xs:"1.5rem",lg:"2.5rem"},mt:"15px"}}>" Our online services are free till now "</Typography> 
    </Box>
    </Container>
  )
}
