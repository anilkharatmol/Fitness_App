import { Link } from "react-router-dom";
import { Stack  } from "@mui/material";
import Logo from '../assets/images/Logo.png';

export default function Navbar(){

    return(
        <Stack direction="row" justifyContent='space-around' sx={{gap:{sm:'120px',xs:'40px'},
        mt:{sm:'32px',xs:'20px'}, justifyContent:'none'}} px="20px">
            <a href='#exercises'>
            <img src={Logo} alt="logo" style={{width:'48px',height:'48px',margin:'0 20px'}}/>
            </a>
            <Stack direction="row" gap="20px" fontSize="22px" alignItems="flex-end">
                <Link to="/"  style={{textDecoration:'none',color:'grey',borderBottom:'3px solid #3A1212'}}>Home</Link>
                <Link to="/bmicalculator"  style={{textDecoration:'none',color:'grey',borderBottom:'3px solid #3A1212'}}>BMI calculator</Link>
            </Stack>
        </Stack>
    )
}
