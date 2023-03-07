import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';


const Navigation = () => {
  return (
    <div>
        <AppBar>
            <Toolbar style={{backgroundColor:'darkred'}}>
                <Typography style={{paddingRight:615}}>Movie Management App</Typography>
                {<HomeIcon />}<Link to="/home" style={{paddingRight:50,color:'white'}}>Home</Link>
                {<AddIcon fontSize="small"/>}<Link to="/addmovie" style={{paddingRight:50,color:'white'}}>Add Movie</Link>
                {<SearchIcon/>}<Link to="/searchmovie" style={{paddingRight:50,color:'white'}}>Search Movie</Link>
                <Link to="/aboutus" style={{paddingRight:50,color:'white'}}>About us</Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navigation
