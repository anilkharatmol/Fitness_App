import { Routes,Route } from "react-router-dom";
import './App.css';
import { Box } from "@mui/material";
import Home from "./Pages/Home";
import ExerciseDetails from "./Pages/ExerciseDetails";
import Navbar from "./Components/Navbar";
import BmiCalculator from "./Components/BmiCalculator";

export default function App(){
    return(
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
                <Route path="/bmicalculator" element={<BmiCalculator/>}/>
            </Routes>
        </Box>
    )
}