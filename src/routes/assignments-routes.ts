import express from "express";
import Assignments from "../models/Assignments";
const assignmentsRoutes = express.Router();

const assignment: Assignments [] =[
    {assignment: "Walrus Worksheet",    score: 9,   total: 10, completed: true },
    {assignment: "Jellyfish Project",   score: 15,  total: 15, completed: true },
    {assignment: "Dolphin Quiz",        score: 8,   total: 10, completed: true },
    {assignment: "Oceans Unit Test",    score: 0,   total: 25, completed: false }
];

const assignmentAverage = function(array: Assignments[]):number{
    let scores = 0;
    let totals = 0;
    array.forEach((itemz)=>{
        scores += itemz.score
        totals += itemz.total
    })
    return parseFloat(((scores/totals)*100).toFixed(0));
}


assignmentsRoutes.get("/api/assignments", function (req, res){
    res.json(assignment)
    res.status(200)
});

assignmentsRoutes.get("/api/summary", function (req, res){
    
    res.json()
})


assignmentsRoutes.get("/", function (req,res){
    let results = assignment; 
    let average = assignmentAverage(assignment);
    res.render("assignments", {results, average});
});

assignmentsRoutes.get("/add-assignment-form", function (req,res){
    res.render("add-assignment-form");
});



export default assignmentsRoutes