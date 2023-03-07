import { Button, Tab, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const EditMovie = (props) => {

    console.log(props);

  const [data,setData] = useState({
    moviename:props.value.moviename,
    actor:props.value.actor,
    actress:props.value.actress,
    director:props.value.director,
    releaseyear:props.value.releaseyear,
    cinematography:props.value.cinematography,
    producer:props.value.producer,
    language:props.value.language,


  })

  const inputHandler = (event) =>{
    const {name,value} = event.target;
      setData((previousState)=>({
      ...previousState,
      [name]:value
    }))
  }

  const readvalues = ()=>{
    var postdata = {...data,_id : props.value._id}
    axios.post("http://localhost:7501/movie/update",postdata)
    .then((response)=>{
      console.log("post data"+response.data);
      alert("Successfully Updated!!");
      window.location.reload()
    })
  }


  return (
    <div>
        <br></br><br></br><br></br>
      <Typography variant='h3'sx={{fontFamily:'cursive'}}>Update the Changes </Typography>
      <br></br><br></br>
      <TextField name='moviename' value={data.moviename} onChange={inputHandler} label="Movie Name" variant='outlined' margin='dense'sx={{width:500 }} ></TextField><Tab></Tab>
      <TextField name='actor' value={data.actor} onChange={inputHandler} label="Actor" variant='outlined'  margin='dense'sx={{width:500}}></TextField><br></br>
      <TextField name='director' value={data.director} onChange={inputHandler} label="Director" variant='outlined' margin='dense'sx={{width:500}}></TextField><Tab></Tab>
      <TextField name='actress' value={data.actress} onChange={inputHandler} label="Actress" variant='outlined' margin='dense'sx={{width:500}}></TextField><br></br>
      <TextField name='cinematography' value={data.cinematography} onChange={inputHandler} label="Cinematography" variant='outlined' margin='dense'sx={{width:500}}></TextField><Tab></Tab>
      <TextField name='releaseyear' value={data.releaseyear} onChange={inputHandler} label="Release Year" variant='outlined' margin='dense'sx={{width:500}}></TextField><br></br>
      <TextField name='producer' value={data.producer} onChange={inputHandler} label="Producer" variant='outlined' margin='dense'sx={{width:500}}></TextField><Tab></Tab>
      <TextField name='language' value={data.language} onChange={inputHandler} label="Language" variant='outlined' margin='dense'sx={{width:500}} ></TextField><br></br><br></br><br></br>
      <Button onClick={()=>{readvalues()}} variant='contained' sx={{backgroundColor:'black'}}> Add Update</Button>
      <br></br><br></br>
    </div>
  )
}

export default EditMovie