import { Box, Stack, Typography } from "@mui/material";


export default function ExerciseVideos({exerciseVideos,name}){

    if(!exerciseVideos.length) return ;
   
    
    return(
        <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p='20px'>
            <Typography variant="h3" mb='33px'>
                Watch <span style={{textTransform:'capitalize',color:'black',fontFamily:'fantasy'}}>{name}</span> Exercise Videos :-
            </Typography>
                <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' }}} marginLeft='160px' justifyContent="flex-start" flexWrap="wrap" alignItems="center">
                {exerciseVideos?.slice(0,6).map((element,index)=>(
                    <a key={index} className="exercise-video"  href={`https://www.youtube.com/watch?v=${element.video.videoId}`}
                    target="_blank" rel="noreferrer">
                        <img style={{borderRadius:'10px'}} src={element.video.thumbnails[0].url} alt={element.video.title}/>
                        <Box>
                            <Typography variant="h6"  color='black'>
                                {element.video.title} 
                            </Typography>
                            <Typography variant="h6" fontWeight='bold' color='black'>
                               By {element.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}