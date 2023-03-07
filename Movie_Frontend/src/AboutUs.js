import { Box, Typography } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const AboutUs = () => {
  return (
    <div>
      <br></br><br></br>
      <Box sx={{backgroundColor:'lightgray', padding:10}}>
        <Typography variant='h5' sx={{textAlign:'left', fontWeight:'bold'}}> WHAT WE DO !!</Typography>
        <p sx={{}}>
          <ul>
            Movie Management App is a multifaceted development company with expertise in building cutting-edge solutions on the development front with 
            the added benefit of being able to deliver innovative solutions on the design & marketing fronts.
            We specialize in transforming brands & experiences to thrive in the global market.
            We have been a professional, creative & tech-savvy strategic technology solutions provider in the industry for more than a decade
            Our team helps clients overcome technological challenges through omnichannel software, brand development & digital media campaigns that result in game-changing digital transformations.
          </ul>
        </p>
      </Box>
      <Box sx={{padding:10, backgroundColor:'white'}}>
        <Typography variant='h5'sx={{textAlign:'left', fontWeight:'bold',fontFamily:'cursive',color:'blue'}}> OUR PROCESS</Typography>
        <p sx={{justifyContent:'center'}}>
          <ul>
          Movie Management App prides itself on having a time-tested development process that starts with the initial discussion and carries through till the implementation/go live phase. 
          We believe that key to carrying out a project is communication between client and service provider and we will ensure that we get the requirements right before kickstarting the project. 
          Another reason that clients choose us is for our ability to get the work done whilst meeting strict deadlines.
        </ul>
        </p>
      </Box>
      <Box sx={{pb:8,pr:10,pl:10,pt:3, backgroundColor:'lavender'}}>
        <Typography variant='h5'sx={{textAlign:'center', fontWeight:'bold',fontFamily:'monospace'}}>GET IN TOUCH</Typography><br></br>
        <Typography variant='h6'sx={{textAlign:'center', fontFamily:'cursive'}}>We are looking forward to hearing from you so don’t hesitate to contact us</Typography><br></br>
        <Typography variant='h6'sx={{textAlign:'center', fontFamily:'cursive'}}> <CallIcon/> : +1 205 594-8808</Typography>
        <Typography variant='h6'sx={{textAlign:'center', fontFamily:'cursive'}}><EmailIcon/>Email :  movie@app.com</Typography>
      </Box>
    </div>
  )
}

export default AboutUs
