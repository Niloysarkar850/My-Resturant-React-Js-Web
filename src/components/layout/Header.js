import React ,{useState}  from 'react'
import {Box, Typography,AppBar, Toolbar,IconButton,Drawer, Divider}  from '@mui/material';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import {Link,NavLink} from 'react-router-dom';
import "../../styles/HeaderStyles.css";
import ListIcon from '@mui/icons-material/List';
import { Padding } from '@mui/icons-material';
const Header = () => {
  const[mobileOpen,setMobileOpen]=useState(false)
//handle menu click
const handleDrawerToggle=()=>{
  setMobileOpen(!mobileOpen)
}
//menu drawer
const drawer=(
  <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
    <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1, my:2}}> 
          <DinnerDiningIcon/>
          My Resturant</Typography>
          <Divider/>
      
            <ul className="mobile-navigation">
              <li>
                <NavLink activeClassName="active" to={'/'}>Home</NavLink >
              </li>
              <li>
                <NavLink  to={'/menu'}>Menu</NavLink >
              </li>
              <li>
                <NavLink  to={'/about'}>About</NavLink >
              </li>
              <li>
                <NavLink  to={'/contact'}>Contact</NavLink >
              </li>
            </ul>
          
  </Box>
)

  return (
    <>
    <Box>
      <AppBar component={'nav'}sx={{bgcolor:"black"}}>
        <Toolbar> 
          <IconButton color="inherit" aria-lebel="open drawer" edge="start" sx={{mr:2,display:{sm:"none"}}} onClick={handleDrawerToggle}>
           
            <ListIcon/>
          </IconButton>
        <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1}}> 
          <DinnerDiningIcon/>
          Biriyani Hub</Typography>
          <Box sx={{display:{xs:"none",sm:"block"}}}>
            <ul className="navigation-menu">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/menu'}>Menu</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'},"& .MuiDrawer-paper":{
          boxSizing:'border-box',
          width:"240px",
        }}}>
          {drawer}
        </Drawer>
      </Box>
      <Box > <Toolbar/></Box>
     
    </Box>
    </>
  )
}

export default Header
