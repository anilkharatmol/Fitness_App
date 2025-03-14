
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import {  useEffect, useState } from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";


export default function SearchExercises({setSearchedExercises,bodyPart,setBodyPart}){

    const[search,setSearch]=useState('');

    const[fetchedData,setFetchedData]=useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '28be99fa15msh350c2330b79fcf7p16b9afjsn15bd07aaf37b',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };


    useEffect(()=>{
       async function fetchedExercises(){
        const bodyPartsData= await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options);

        const response=await bodyPartsData.json();

        setFetchedData(['all',...response]);

       }
       fetchedExercises();
    },[])

    // console.log(fetchedData);

    async function searchHandler(){
        if(search){
            const exercisesData=await fetch('https://exercisedb.p.rapidapi.com/exercises',options)

            const data=await exercisesData.json();

            console.log(data);


            const searchedData=data.filter((i)=>
            i.name.toLowerCase().includes(search) ||
            i.bodyPart.toLowerCase().includes(search) ||
            i.equipment.toLowerCase().includes(search) ||
            i.target.toLowerCase().includes(search) 
            )

            // console.log(searchedData);

            setSearch('');

            setSearchedExercises(searchedData);

        }
    }

    return(
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
                Effective Exercises You should know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField  height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e)=>setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"/>
          <Button className="search-btn" sx={{ bgcolor: 'orange',color:'white', textTransform: 'none',
           width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px',
            fontSize: { lg: '20px', xs: '14px' } }}  onClick={searchHandler}>Search</Button>
            </Box> 
            <Box sx={{position:'relative',width:'100%',p:'20px'}}>
                <HorizontalScrollBar data={fetchedData} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        </Stack>
    )
} 