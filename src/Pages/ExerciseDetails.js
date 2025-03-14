import { Box } from "@mui/material";
import { useEffect } from "react";
import Details from "../Components/Details";
import ExerciseVideos from "../Components/ExerciseVideos";
import { useState } from "react";
import { useParams } from "react-router-dom";



export default function ExerciseDetails(){
    const[exerciseDetails,setExerciseDetails]=useState({});
    const[exerciseVideos,setExerciseVideos]=useState([]);
    const{id}=useParams();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '28be99fa15msh350c2330b79fcf7p16b9afjsn15bd07aaf37b',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    
    const youtubeOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '28be99fa15msh350c2330b79fcf7p16b9afjsn15bd07aaf37b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
    };


    useEffect(()=>{

        const exerciseUrl='https://exercisedb.p.rapidapi.com/exercises';
        const youtubeUrl='https://youtube-search-and-download.p.rapidapi.com';

       async function fetchedExercises(){
        const data= await fetch(`${exerciseUrl}/exercise/${id}`,options);

        const response=await data.json();

        setExerciseDetails(response)


        const videosData= await fetch(`${youtubeUrl}/search?query=${response.name}`,youtubeOptions);

        const Videos=await videosData.json();

        setExerciseVideos(Videos.contents)

       }
       fetchedExercises();
    },[id])

    return(
        <Box>
            <Details exerciseDetails={exerciseDetails} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name}/>
        </Box>
    )
}