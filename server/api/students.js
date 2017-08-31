'use strict'
const api = require('express').Router();
const models = require('../../db/models');
const User = models.User;
const Campus = models.Campus;
const Student = models.Student



//Students

api.get('/', (req, res, next)=>{
	console.log('hit route')
	Student.findAll()
		.then((students)=>{
			console.log('all students', students)
			res.json(students)
		})
		.catch(next)
})

api.get('/:studentId', (req, res, next)=>{
	Student.findOne({
		where: {
			id: req.params.studentId
		}
	})
		.then((student)=>res.json(student))
		.catch(next)
})



api.post('/', (req, res, next)=>{
	console.log('req.body', req.body)
	const creatingStudent = Student.create({
		name: req.body.name,
		email: req.body.email
	})
	const findingCampus = Campus.findOne({
		where: {
			name: req.body.campusName
		}
	})
	Promise.all([creatingStudent, findingCampus])
		.then((array)=>{
			const student = array[0]
			const campus = array[1]	
			student.setCampus(campus)
			return student
		})
		.then(student=>{
			console.log("student", student)
			res.json(student)
		})
	})
	


api.put('/:studentId', (req, res, next)=>{
	Student.update(req.body, {
		where: {
		id: req.params.studentId
	}})
		.then(student=>res.json(student))
		.catch(next)
})


api.delete('/:StudentId', (req, res, next)=>{
	Student.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(Student.findAll())
		.then(students=>res.json(students))
		.catch(next)
})

module.exports=api