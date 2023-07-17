import { Stack, Typography } from "@mui/material";
import All from "../assets/icons/gymLogo.png";
import Back from '../assets/icons/Back.jpg'
import Cardio from '../assets/icons/cardio.png'
import Chest from '../assets/icons/chest.jpg'
import LowerArms from '../assets/icons/LowerArms.png'
import LowerLegs from '../assets/icons/LowerLegs.png'
import Neck from '../assets/icons/Neck.png'
import Shoulders from '../assets/icons/shoulders.jpg'
import UpperArms from '../assets/icons/UpperArms.png'
import UpperLegs from '../assets/icons/UpperLegs.jpg'
import Waist from '../assets/icons/Waist.png'

export default function BodyPart({ item, bodyPart, setBodyPart }) {

  let imageSrc;

 imageSrc=  item==='all'?All:item==='back'?Back:item==='cardio'?
 Cardio:item==='chest'?Chest:item==='lower arms'?LowerArms:item==='lower legs'?
 LowerLegs:item==='neck'?Neck:item==='shoulders'?Shoulders:item==='upper arms'?
 UpperArms:item==='upper legs'?UpperLegs:item==='waist'?Waist:'';

  // message==='Normal'?'green':message==='Overweight'?'red':message==='Underweight'?'blue':''

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid red" : "",
        backgroundColor: "white",
        borderBottomLeftRadius: "4px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={()=>{setBodyPart(item)
      window.scrollTo({top:1800,left:100,behavior:'smooth'})}}
    >
      <img src={imageSrc} alt="gymicon" style={{width:'100px',height:'80px'}} />
      <Typography fontSize='24px' fontWeight='600' color='#3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  );
}



