import React from 'react';
import { Grid, Typography } from '@mui/material';


import "./styles/Skills.css";

const Skills = () => {
    return (
        <div className='container'>
                   <Grid container className='container'p={2}>
           <Grid item xs={12} sx={{display:"flex",justifyContent:{xs:"left",md:"center"},ml:{xs:15,sm:0,lg:0},alignItems:"center",transform:"translateY(60px)"}}>
            <Typography variant="h2" className='aboutText'>
                About
            </Typography>
           </Grid>
           <Grid container spacing={2} sx={{display:{xs:"block",md:"flex"},justifyContent:"center",alignItems:"center"}}>
                <Grid item xs={12} md={6}> 
                <Typography variant="h5" fontFamily={"Montserrat"} textAlign={{xs:'left',sm:"left",md: "center"}}>
                   hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad
                </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{mt:{xs:6,sm:6,md:0}}}>
                <Typography variant="h5" fontFamily={"Montserrat"} textAlign={{xs:'left',sm:"left",md: "center"}}>
                   hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad hi iam mohammad
                </Typography>
                </Grid>
           </Grid>
        </Grid>
        </div>
    );
};

export default Skills;