import {  Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function ExerciseCard({exercise}){
    return(
            <Link className="exercise-card" to={`exercise/${exercise.id}`}> 
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
            <Stack direction='row'>
                <Button sx={{ml:'20px',color:'red',background:'pink',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ml:'20px',color:'black',background:'lightblue',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
                    {exercise.target}
                </Button>
            </Stack>
                <Typography ml='21px' color='black' fontWeight={600} mt='11px' pb='10px' textTransform='capitalize' fontSize='20px'>{exercise.name}</Typography>
            </Link>
    )
}