import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu } from "react-horizontal-scrolling-menu";




export default function HorizontalScrollBar(props){ 
    return(
        <ScrollMenu >
            {props.data.map((exercise)=>(
                <Box key={exercise.id||exercise} itemID={exercise.id||exercise} title={exercise.id||exercise} m='0 40px'>
                   <BodyPart item= {exercise} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart} />
                </Box>
            ))}
        </ScrollMenu>
    )
}