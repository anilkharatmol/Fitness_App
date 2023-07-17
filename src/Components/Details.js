import { Button, Stack, Typography } from "@mui/material";
import bodyPartImage from "../assets/icons/body-part.png";
import equipmentImage from "../assets/icons/equipment.png";
import targetImage from "../assets/icons/target.png";

export default function Details({ exerciseDetails }) {
  const { bodyPart, gifUrl, name, target, equipment} = exerciseDetails;

  const extraDetails = [
    {
      name: bodyPart,
      image: bodyPartImage,
    },
    {
      name: target,
      image: targetImage,
    },
    {
      name: equipment,
      image: equipmentImage,
    },
  ];
  
  return (
    <Stack 
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={gifUrl}
        alt="gif-image"
        loading="lazy"
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography  fontSize="24px" fontWeight={700}>
          {name}
        </Typography>
        <Typography>
          Exercises keep you strong. {name} {` `}
          is one of the best exercises to target your {target}. It will help you
          to gain energy.
        </Typography>
        {extraDetails.map((i) => (
          <Stack key={i.name} direction="row" gap="24px" alignItems={"center"}>
            <Button sx={{background:'#fff2db',borderRadius:'50%',width:'100px', height:'100px',}}>
              <img src={i.image} alt={bodyPart} style={{width:'50px',height:'50px'}}/>
            </Button>
            <Typography textTransform='capitalize' variant="h5">{i.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
