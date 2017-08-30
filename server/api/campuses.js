'use strict'
const api = require('express').Router();
const models = require('../../db/models');
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

api.get('/', (req, res, next)=>{
	Campus.findAll()
		.then((campuses)=>res.json(campuses))
		.catch(next)
})

api.get('/:campusId', (req, res, next)=>{
	Campus.findOne({
		where: {
			id: req.params.campusId
		}
	})
		.then(campus=>res.json(campus))
		.catch(next)
})

api.post('/', (req, res, next)=>{
	Campus.create(req.body)
		.then(campus=>res.json(campus))
		.catch(next)
	
})

api.put('/:campusId', (req, res, next)=>{
	Campus.update(req.body, {
		where: {
		id: req.params.campusId
	}})
		.then(campus=>res.json(campus))
		.catch(next)
})

api.delete('/:campusId', (req, res, next)=>{
	Campus.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(Campus.findAll())
		.then(campuses=>res.json(campuses))
		.catch(next)
})


module.exports=api