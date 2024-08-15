import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';

export default function ServiceCards() {

    const services = [
        {
          icon: <img src="" height="45px"/>,
          title: 'Frontend Development',
          body : "To create an engaging and user-friendly frontend for your web application, we rely on the information we gather including your target audience, brand identity, and industry practices. The entire web application has a cohesive UX thanks to the work of our designers and engineers.",
        },
        {
          icon: <img src="" height="45px"/>,
          title: 'Backend Development',
          body:"Our engineers make it possible for your web application to have a solid and secure core. Our backends can easily be integrated with different systems and third-party services because of their adaptability. Additionally, your business can also benefit from the insights provided by our data structures.",
        },
        {
          icon: <img src="" height="45px"/>,
          title: 'eCommerce & CMS Development',
          body:"With the help of our custom CMS and eCommerce development services, you can grow and scale your online business. We provide development, migration, and administration services for eCommerce storefronts. Additionally, we offer everything from full-stack CMS systems to customised content management modules.",
        },
        {
          icon: <img src="" height="45px"/>,
          title: 'ERP Solutions',
          body:"Our team of expert developers can assist you in creating robust and powerful ERP systems from the ground up or also help you transform your current system into a new system with custom integrations. Furthermore, we offer custom solutions, migration, implementation, extension & plugin development, and more according to your needs.",
        },
        {
          icon: <img src="" height="45px"/>,
          title: 'SaaS Development Services',
          body:"We offer end-to-end SaaS-based services and solutions. We assist you from initial planning and consultation to deployment, launch and maintenance. With our SaaS development services, you are provided with enterprise or business software, systems software, embedded software, control systems software, and more.",
        },
        {
          icon: <img src="" height="45px"/>,
          title: 'Web Application Development',
          body:"Our team of web developers can help you create web applications like self-service portals, B2C and B2B eCommerce web applications, patient portals, vendor portals, eLearning web applications, and others. We develop and create customizable web applications according to your specific needs and requirements."          
        },
      ];
      


  return (
    <div style={{backgroundColor:"rgb(255,0,0,0.125)"}} >
         <Container maxWidth="lg" sx={{ mt:{xs:"90px",lg:"120px"}, display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center" }}  >
     <Grid container sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
     <Typography variant="h3" align="center" fontWeight={600} gutterBottom mt={"30px"}>
     Our   <span style={{color:"#B3404A" , fontWeight:700}}>Web Development</span> Services
      </Typography>
     </Grid>
      <Grid container spacing="45px" justifyContent="center" sx={{mt:{xs:"5px",lg:"5px"}}} mb={"30px"}>
        {services.map((service) => (
          <Grid item key={service.title} xs={12} sm={6} md={4} >
            <Box 
              sx={{ 
                padding: 3, 
                borderRadius: 0, 
                boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                backgroundColor:"white",
                minHeight:"512px",
              }}
            >
              <Box>
               
                <Typography variant="h4" pt={"15px"}    fontWeight={700} >
                 {service.title}
                </Typography>
                <Typography variant="h6" pt={"15px"}  fontWeight={500} color={"rgb(0,0,0,0.7)"}>
                    {service.body}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  )
}
