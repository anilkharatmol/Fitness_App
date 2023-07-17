import { Box, Stack, Typography } from "@mui/material";
import { Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { useEffect, useState } from "react";

export default function Exercises({ searchedExercises,
  setSearchedExercises,
  bodyPart
}) {

    const exercisesPerPage=8;
    const[currentPage,setCurrentPage]=useState(1);

    const lastIndex=currentPage*exercisesPerPage;
    const firstIndex=lastIndex-exercisesPerPage;

    console.log(searchedExercises);
    const currentExercises=searchedExercises.slice(firstIndex,lastIndex);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b6dad4445fmsh7801a11ed26aa43p15e908jsnbbfd97d59f9b',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

   

    function paginate(e,value){
        setCurrentPage(value);

        window.scrollTo({top:1800 ,behavior:'smooth'})
    }

     useEffect(()=>{

        async function fetchExercisesData(){
        let exercisesData=[];

        if(bodyPart==='all'){
            let data=await  fetch('https://exercisedb.p.rapidapi.com/exercises',options);
            exercisesData=await data.json();
        }
        else{
            let data=await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,options)
            exercisesData=await data.json();
        }
        setSearchedExercises(exercisesData);
    }

    fetchExercisesData();

    },[bodyPart])

    // console.log(searchedExercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb='40px'>Showing Results</Typography>
      <Stack direction='row' sx={{gap:{lg:'110px' ,xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((e,i)=>
        <ExerciseCard key={i} exercise={e}/>)}
         </Stack>
         <Stack mt='100px' alignItems='center' >
            {searchedExercises.length>9 && <Pagination color="primary" shape="rounded"
            count={Math.ceil(searchedExercises.length/exercisesPerPage)} page={currentPage} onChange={paginate}
             size="large"></Pagination>}
         </Stack>
    </Box>
  );
}
