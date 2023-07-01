import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center' , bgcolor:'#1A1A19', color:'violet',p:3}}>

    <Box sx={{my:2, "& svg":{fontSize:"60px",cursor:'pointer',mr:2,}, "& svg:hover":{
        color:'goldenrod',transform:'traslateX(5px)',
        transition:'all 400ms',
    }}}>
      <a href="/">
        <InstagramIcon /></a>
        <a href="https://www.facebook.com/niloy.sarkar.98499123/"><FacebookIcon/></a>
       <a href="https://www.linkedin.com/in/niloy-sarkar-b989951a7/?fbclid=IwAR2l2ouamx4Q7F_IDAglBj0xjwuHMXXXPLJdFfQJ9gdSemNaDnQYQvbELVU"><LinkedInIcon/></a>
       <a href="https://github.com/Niloysarkar850"><GitHubIcon/></a>
    </Box>

        <Typography variant="h6" sx={{"@media(max-width:600px)":{fontSize:"1rem"}}}>
            All Rights Reserved &copy;Niloy(2023-2050)
        </Typography>
    </Box>
    </>
  )
}

export default Footer
