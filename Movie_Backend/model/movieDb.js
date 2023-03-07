//DB file setup steps:

// importing mongoose
const mongoose = require("mongoose");

//connecting with DB
mongoose.connect("mongodb+srv://ashlyroy10:ashlyroy1997@cluster0.zacbcqw.mongodb.net/?retryWrites=true&w=majority");

//Creating Schema(structure for DB)
const Schema = mongoose.Schema;

//Creating New Schema
var movieSchema = new Schema({
    moviename : String,
    actor : String,
    actress : String,
    director : String,
    releaseyear : Number,
    cinematography : String,
    producer : String,
    language : String
});

//adding schema to a collection with collection name 'courses'
//collect name should be plural like courses,books,...
var CinemaInfo = mongoose.model("movies",movieSchema);


//to use this file in server, export 
module.exports = CinemaInfo;
