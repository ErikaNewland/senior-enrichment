'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING
    }, 
    image: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        }
    }
})

module.exports = Campus