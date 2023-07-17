import { Card, Typography ,Grid,TextField,Button,CardContent} from "@mui/material";
import { useState,Fragment } from "react"


export default function BmiCalculator(){

    const[weight,setWeight]=useState(0);
    const[height,setHeight]=useState(0);
    const[message,setMessage]=useState('');
    const[bmi,setBmi]=useState('');
    
    
    let calculateBmiHandler = (event) => {
        event.preventDefault()
      
        if (weight === 0 || height === 0) {
          alert('Please enter a valid weight and height')
        } else {
          let bmi = (weight / (height * height) )* 10000;
          setBmi(bmi.toFixed(1))
      
      
          if (bmi < 19) {
            setMessage('Underweight')
          } else if (bmi >= 19 && bmi < 25) {
            setMessage('Normal')
          } else {
            setMessage('Overweight')
          }
        }
      }


    return(
     <Fragment> 
      <Typography variant="h5" mt='20px' textAlign='center'>The body mass index (BMI) is a measure that uses </Typography>
      <Typography variant="h5"  textAlign='center'> your height and weight to work out if your weight is healthy.</Typography>
<Grid>
  <Card sx={{ maxWidth: {lg:'25%',xs:'15%%'}, padding: "20px 5px", margin: "0 auto" ,marginTop:'1cm',border:'2px solid black',borderRadius:'20px'}}>
    <CardContent>
    <Typography  variant="h5"  fontWeight='600' mb='20px' align="center">
 BMI CALCULATOR
 </Typography>
 <form onSubmit={calculateBmiHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField type="number" onChange={(e)=>{setWeight(e.target.value)}}placeholder="Enter weight" label="Weight(in kg)" variant="outlined" fullWidth required/>
          </Grid>
          <Grid item xs={12}>
            <TextField type="number" onChange={(e)=>{setHeight(e.target.value)}} placeholder="Enter height" label="Height(in cm)" variant="outlined" fullWidth required/>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success" fullWidth >Submit</Button>
          </Grid>
          <Grid item xs={12}>
            <Button  variant="outlined" color="secondary"  onClick={()=>{window.location.reload()}} fullWidth >Reload</Button>
          </Grid>
        </Grid>
        </form>
        <Typography  textAlign='center' marginTop='20px' fontWeight='bold'>Your BMI is:</Typography>
        <Typography textAlign='center' fontSize='20px' fontFamily='monospace' color='#ff12df'  textTransform='capitalize' fontStyle='italic' fontWeight='bolder'>{bmi}</Typography>
        <Typography textAlign='center' variant="h5" fontWeight='bolder' color={message==='Normal'?'green':message==='Overweight'?'red':message==='Underweight'?'blue':''} >{message}</Typography>
    </CardContent>
  </Card>
</Grid>
</Fragment>
    )
}
