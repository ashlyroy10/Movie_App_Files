//Basic Server Structure

//importing DB file to server file
const CinemaInfo = require('./model/movieDb');


//1.Import Express
const express = require("express");

//2.Initialising Express
const app = new express();

//Parsing Body Parameter for POST function
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//CORS Policy - Port Connection
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type ");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

//3.API Creation

//Add Movie
app.post('/movie/create',(req,res)=>{
    try{
        console.log(req.body);//data is in server
        let cinema = new CinemaInfo(req.body);//passing to database
        cinema.save();//data saved to db
        res.send("Data Added to db");
    }
   catch(error){
        res.status(500).send(error);
   }
    
});

//Read Movie
app.get('/movie/read',async (req,res)=>{
    try{
        let result = await CinemaInfo.find();
        res.json(result);
    }
    catch(error){
        res.status(500).send(error);
    }
    
});

//Update Movie
app.post('/movie/update',async (req,res)=>{
    try{
        console.log("update",req.body);
        let result = await CinemaInfo.findByIdAndUpdate(req.body._id,req.body);
        res.json(result);
    }
    catch(error){
        res.status(500).send(error);
    }
    
});

//Delete Movie
app.post('/movie/delete',async (req,res)=>{
    try{
        let result = await CinemaInfo.findByIdAndDelete(req.body._id);
        res.send("Data Deleted");
    }
    catch(error){
        res.status(500).send(error);
    }
    
});

//Search Movie
app.post('/movie/search',async (req,res)=>{
    try{
        //let result = await CinemaInfo.find(req.body);
        //let result = await CinemaInfo.find({"moviename":{$regex:'.*' + req.body.moviename + '.*'}});
        let result = await CinemaInfo.find({"moviename":{$regex:new RegExp(req.body.moviename, "i")}});
        res.json(result);
    }
    catch(error){
        res.status(500).send(error);
    }
    
});

//4.Setting PORT number
app.listen(7501, ()=> {console.log("Server is running in port 7501")})