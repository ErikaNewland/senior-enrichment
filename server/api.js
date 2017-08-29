'use strict'
const api = require('express').Router();
const db = require('../db');
const models = require('../db/models');
const User = models.User;
const Campus = models.Campus;
const Student = models.Student


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => {
	res.send({hello: 'world'})
})

//Campus

api.get('/campuses', (req, res, next)=>{
	Campus.findAll()
		.then((campuses)=>res.json(campuses))
		.catch(next)
})

api.get('/campuses/:campusId', (req, res, next)=>{
	Campus.findOne({
		where: {
			id: req.params.campusId
		}
	})
		.then(campus=>res.json(campus))
		.catch(next)
})

api.post('/campuses', (req, res, next)=>{
	Campus.create(req.body)
		.then(campus=>res.json(campus))
		.catch(next)
	
})

api.put('/campuses/:campusId', (req, res, next)=>{
	Campus.update(req.body, {
		where: {
		id: req.params.campusId
	}})
		.then(campus=>res.json(campus))
		.catch(next)
})

api.delete('/campuses/:campusId', (req, res, next)=>{
	Campus.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(Campus.findAll())
		.then(campuses=>res.json(campuses))
		.catch(next)
})


//Students

api.get('/students', (req, res, next)=>{
	Student.findAll()
		.then((students)=>res.json(students))
		.catch(next)
})

api.get('/students/:studentId', (req, res, next)=>{
	Student.findOne({
		where: {
			id: req.params.studentId
		}
	})
		.then((student)=>res.json(student))
		.catch(next)
})

api.post('/students', (req, res, next)=>{
	Student.create(req.body)
		.then(student=>res.json(student))
		.catch(next)
	
})

api.put('/students/:studentId', (req, res, next)=>{
	Student.update(req.body, {
		where: {
		id: req.params.studentId
	}})
		.then(student=>res.json(student))
		.catch(next)
})


api.delete('/students/:StudentId', (req, res, next)=>{
	Student.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(Student.findAll())
		.then(students=>res.json(students))
		.catch(next)
})





module.exports = api