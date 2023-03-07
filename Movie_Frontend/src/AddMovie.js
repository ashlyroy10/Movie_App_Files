import { Button, Tab, TextField, Typography } from '@mui/material'
import React from 'react'
import useForm from './movieform'
import axios from 'axios'

const AddMovie = () => {

  var[movieadd,setMovieadd] = useForm({"moviename":"","actor":"","actress":"","director":"","releaseyear":0,"cinematography":"","producer":"","language":""})
  
  const newmovie = () => {
    console.log(movieadd);
    axios.post("http://localhost:7501/movie/create",movieadd)
    .then((response)=>{
      console.log(response.data);
      alert("Successfully Added!!");
    })
  }
  return (
    <div>
      <br></br><br></br><br></br><br></br>
      <Typography variant='h3'sx={{fontFamily:'cursive'}}>Add New Movie </Typography>
      <br></br>
      <TextField name='moviename' value={movieadd.item} onChange={setMovieadd} label="Movie Name" variant='outlined' margin='dense'sx={{width:500}} ></TextField><Tab></Tab>
      <TextField name='actor' value={movieadd.item} onChange={setMovieadd} label="Actor" variant='outlined'  margin='dense'sx={{width:500}}></TextField><br></br>
      <TextField name='director' value={movieadd.item} onChange={setMovieadd} label="Director" variant='outlined' margin='dense'sx={{width:500}}></TextField><Tab></Tab>
      <TextField name='actress' value={movieadd.item} onChange={setMovieadd} label="Actress" variant='outlined' margin='dense'sx={{width:500}}></TextField><br></br>
      <TextField name='cinematography' value={movieadd.item} onChange={setMovieadd} label="Cinematography" variant='outlined' margin='dense'sx={{width:500}}></TextField><Tab></Tab>
      <TextField name='releaseyear' value={movieadd.item} onChange={setMovieadd} label="Release Year" variant='outlined' margin='dense'sx={{width:500}}></TextField><br></br>
      <TextField name='producer' value={movieadd.item} onChange={setMovieadd} label="Producer" variant='outlined' margin='dense'sx={{width:500}}></TextField><Tab></Tab>
      <TextField name='language' value={movieadd.item} onChange={setMovieadd} label="Language" variant='outlined' margin='dense'sx={{width:500}} ></TextField><br></br><br></br><br></br>
      <Button onClick={newmovie} variant='contained'sx={{backgroundColor:'black'}}>Add Movie</Button>
      <br></br><br></br>
    </div>
  )
}

export default AddMovie
