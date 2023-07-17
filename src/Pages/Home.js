import { Box } from "@mui/material";
import Banner from "../Components/Banner";
import SearchExercises from "../Components/SearchExercises";
import Exercises from "../Components/Exercises";
import { useState } from "react";

export default function Home(){
    const[searchedExercises,setSearchedExercises]=useState([]);
    const[bodyPart,setBodyPart]=useState('all');


    // console.log(bodyPart);

    return(
        <Box>
            <Banner/>
            <SearchExercises setSearchedExercises={setSearchedExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            <Exercises searchedExercises={searchedExercises} setSearchedExercises={setSearchedExercises} bodyPart={bodyPart} />
        </Box>
    )
}
