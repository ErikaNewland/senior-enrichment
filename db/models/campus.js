'use strict';
const Sequelize = require('sequelize')
const db = require('../index.js')


const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    image: {
        type: Sequelize.TEXT,
        validate: {
            isUrl: true
        }
    }
}, {
    hooks: {
        beforeDestroy: (campus) =>{
            console.log('in hook')
            db.model('student').findAll({
                where: {
                    campusId: campus.id
                }
            })
                .then(students => {
                    console.log('students', students)
                    const destroyStudentsPromiseArray = students.map(student=>{
                        return student.destroy()
                    })
                    return destroyStudentsPromiseArray
                })
                .then(arrOfPromises=>{
                    return Promise.all(arrOfPromises)
                })
                .catch(console.log)
        }
    }
})

module.exports = Campus