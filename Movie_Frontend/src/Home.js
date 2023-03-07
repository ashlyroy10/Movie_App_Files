import { Table, TableBody, TableHead, TableRow, TableContainer, Button } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import EditMovie from './EditMovie';

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


const Home = () => {
  var[movie,setMovie] = useState([]);
  var[updatestate,setUpdatestate] = useState(false);
  var[datastate,setDatastate] = useState('');
  var final;

  useEffect(()=> {fetchCourse()},[]);

  
  const fetchCourse = () =>{
    axios.get("http://localhost:7501/movie/read")
    .then((response) => {
      console.log(response.data);
      setMovie(movie = response.data);
    })
  }
  
  const deleteCourse = (id) => {
    const data = {"_id":id}
    axios.post("http://localhost:7501/movie/delete",data)
    .then((response)=>{
      console.log(response.data);
      alert("Successfully Deleted!!");
      fetchCourse();
    })
  }
  
  function updateCourse(value){
    console.log("displaying edit value", value);
    setUpdatestate(true);
    setDatastate(value);
    console.log("error",updatestate);
  }


  if(updatestate){
    final = <EditMovie value={datastate} />
  }else{
    final = <div>
    <br></br><br></br><br></br>
    <Typography variant='h3'sx={{fontFamily:'cursive'}}>List Of Movies </Typography><br></br>
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
          <StyledTableCell>Update </StyledTableCell>
          <StyledTableCell>Delete </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {movie.map((value, index) => {
          return (
            <StyledTableRow key={index}>
            <StyledTableCell>{value.moviename}</StyledTableCell>
            <StyledTableCell>{value.actor}</StyledTableCell>
            <StyledTableCell>{value.actress}</StyledTableCell>
            <StyledTableCell>{value.director}</StyledTableCell>
            <StyledTableCell>{value.releaseyear}</StyledTableCell>
            <StyledTableCell>{value.cinematography}</StyledTableCell>
            <StyledTableCell>{value.producer}</StyledTableCell>
            <StyledTableCell>{value.language}</StyledTableCell>
            <StyledTableCell><Button onClick={() => {updateCourse(value);}}variant="contained" startIcon={<CreateIcon />} color="success">Edit</Button></StyledTableCell>
            <StyledTableCell><Button onClick={() => {deleteCourse(value._id);}} variant="contained"startIcon={<DeleteIcon />}color="error">Delete</Button></StyledTableCell>
            </StyledTableRow>
          );
        })}
      </TableBody>
    </Table>
    </TableContainer>
  </div>
  }
  return (
        final
  )
}

export default Home
