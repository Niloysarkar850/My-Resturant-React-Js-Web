import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography,TableContainer,Table,TableCell,TableRow,TableHead, Paper, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const contact = () => {
  return (
    <Layout>
     <Box sx={{my:10,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
      <Typography variant="h4">
        Contact My Resturant
      </Typography>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere adipisci amet accusamus, beatae esse iure eaque! Impedit deleniti maxime, cum tenetur cupiditate distinctio perferendis suscipit maiores voluptatibus culpa hic nemo.</p>
     </Box>
     <Box sx={{m:3 , width:"600px",ml:10,"@media (max-width:600px)":{
      width:"300px"
     }}}>
      <TableContainer component={Paper}>
        <Table aria-lebel="contact table">
          <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:'black',color:'white'}}align="center">Contact details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
              <SupportAgentIcon sx={{color:"red",pt:1}}/>12341968(tollfree)
              </TableCell>
              
            </TableRow>
            <TableRow>
            <TableCell>
              <MailIcon sx={{color:"red",pt:1}}/>ndas140850@gmail.com
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
              <WhatsAppIcon sx={{color:"red",pt:1}}/>6289782956
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </TableContainer>
     </Box>
    </Layout>
  )
}

export default contact
