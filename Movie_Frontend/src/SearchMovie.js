import { Button,TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import useForm from './movieform'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const SearchMovie = () => {

  const searchCinema = () =>{
    axios.post("http://localhost:7501/movie/search",movieadd)
    .then((response) => {
      console.log(response.data);
      setResult(result = response.data);
    })
  } 

  var[movieadd,setMovieadd] = useForm({"moviename":""})
  var[result,setResult] = useState([]);

  return (
    
    <div >
        <br></br><br></br><br></br>
      <Typography variant='h3'sx={{fontFamily:'cursive'}}>Search Movie </Typography>
      <br></br>
      <TextField name='moviename' value={movieadd.moviename} onChange={setMovieadd} label="Movie Name" variant='outlined' sx={{width:850}} ></TextField><br></br><br></br>
      <Button variant='contained' onClick={searchCinema} sx={{backgroundColor:'black'}}>Search</Button>
      <br></br><br></br><br></br>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Movie Name</StyledTableCell>
          <StyledTableCell>Actor</StyledTableCell>
          <StyledTableCell>Actress</StyledTableCell>
          <StyledTableCell>Director</StyledTableCell>
          <StyledTableCell>Release_Year</StyledTableCell>
          <StyledTableCell>Cinematography</StyledTableCell>
          <StyledTableCell>Producer</StyledTableCell>
          <StyledTableCell>Language</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          result.map((value,index) => {
            return <StyledTableRow key={index}>
              <StyledTableCell>{value.moviename}</StyledTableCell>
              <StyledTableCell>{value.actor}</StyledTableCell>
              <StyledTableCell>{value.actress}</StyledTableCell>
              <StyledTableCell>{value.director}</StyledTableCell>
              <StyledTableCell>{value.releaseyear}</StyledTableCell>
              <StyledTableCell>{value.cinematography}</StyledTableCell>
              <StyledTableCell>{value.producer}</StyledTableCell>
              <StyledTableCell>{value.language}</StyledTableCell>
            </StyledTableRow>
            })
         }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default SearchMovie
