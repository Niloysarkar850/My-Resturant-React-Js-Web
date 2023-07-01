import React from 'react'
import { MenuList} from '../data/data'
import Layout from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { NoEncryption } from '@mui/icons-material'


const Menu = () => {
  return (
    <Layout >
      <Box sx={{display:"flex",flexWrap:'wrap',justifyContent:'center',textDecoration:'none'}}>
        {
          MenuList.map(menu=>(
           <Card sx={{maxWidth:"390px", display:"flex",m:2}}>
             <CardActionArea>
               <a href="http://127.0.0.1:5500/src/data/data.html" > <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.Image} alt={menu.name} 
                /></a>
                <CardContent>
                  <Typography  variant="h5" gutterBottom component={'div'} sx={{textDecoration:'none'}} >
                    {menu.name}
                  </Typography>
                  <Typography variant="body2" >
                    {menu.Description}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{textDecoration:"none"}} >
                    {menu.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
    
  )
}


export default Menu
