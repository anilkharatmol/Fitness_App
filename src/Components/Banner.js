import { Box, Button, Typography } from "@mui/material";
import banner from '../assets/images/banner.png';

export default function Banner(){
    return(
        <Box sx={{mt:{lg:'100px',xs:'70px'},
        ml:{sm:'50px'}}} position='relative' p='20px'>
            <Typography color='GrayText' fontWeight='600' fontSize='26px' mb='20px' mt='30px'>
                Fitness Club
            </Typography>
            <Typography fontWeight='800'color='red' mb='20px' sx={{fontSize:{lg:'34px',sm:'20px'}}}>
                MAKE IT HAPPEN. <br/>SHOCK EVERYONE 
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb={2}>
                Check out for more exercises
            </Typography>
            <Button variant="contained" color="success" href="#exercises">Explore exercises</Button>
            <Typography fontWeight='600'  fontSize='200px' color='red' sx={{opacity:0.1,display:{lg:'block',xs:'none'}}}>
                Exercise
            </Typography>
            <img src={banner} alt='banner' className="hero-banner-img"></img>
        </Box>
    )
}