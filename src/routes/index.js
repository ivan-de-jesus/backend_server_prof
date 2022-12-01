const { Router } = require("express");
const router = Router();
//const faker = require('faker')
const Student = require("../models/students");
const Exercises = require("../models/exercises");
const { model } = require("mongoose");

/**********************/
/****Alumnos**********/
/********************/

//Ruta para agregar un nuevo alumno
router.post("/create", (req, res) => {
  Student.create({
    name: req.query.name,
    albumNumerus: req.query.albumNumerus,
    gradus: req.query.gradus,
    group: req.query.group,
    age: req.query.age,
    pass: req.query.pass,
    assignedExercise: req.query.assignedExercise,
  });
  console.log("respuesta", req.query.name);
});

//Ruta para eliminar alumno
router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Student.findByIdAndRemove(id);
});

router.put("/update/:id", async (req, res) => {
  /*console.log("hola", req.params);
  await Student.findByIdAndUpdate(req.params, req.body);
  res.json({
    status: "Actualizado",
  });*/
  const {assignedExercise} = req.body;
  await Student.findByIdAndUpdate(req.params.id, {assignedExercise});
  res.json({
    status: "Actualizado",
  })
});

//Ruta para listar todos los alumnos
router.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

/*************************/
/****Ejercicios**********/
/************************/

router.post("/addExercises", (req, res) => {
  Exercises.create({
    number: req.query.number,
    exercise: req.query.exercise,
    result: req.query.result,
    instruction: req.query.instruction,
    help: req.query.help,
    is_good: req.query.is_good,
    status: req.query.status,
  });
  //console.log("respuesta", req.query.name);
});

//Ruta para eliminar ejercicios
router.get("/deleteExercise/:id", async (req, res) => {
  const { id } = req.params;
  await Exercises.findByIdAndRemove(id);
  console.log("Entro al endpoint");
});

router.get("/exercises", async (req, res) => {
  const exercises = await Exercises.find();
  res.json(exercises);
});
module.exports = router;
