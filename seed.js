//seed.js
const bluebird = require('bluebird')

const db = require('./db').db
const Student=require('./db/models').Student
const Campus=require('./db/models').Campus

//make array of objects for model1
const campuses = [
  {
    name: 'Uranus', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQThMWPtYwh34rCh5_oa_2A_oEeTR32sRpEyI4SBTiCq0TZOEBFg'
    
  },{
    name: 'Saturn', 
    image: 'https://www.nasa.gov/sites/default/files/images/365640main_PIA11141_full.jpg'  
  },{
    name: 'Mars', 
    image: 'http://i.telegraph.co.uk/multimedia/archive/03493/mars1_3493132b.jpg'  
  },{
    name: 'Mercury', 
    image: 'http://s3.amazonaws.com/rapgenius/filepicker/KEPDLNrnSjq5OJOgtkOm_mercury_planet.jpg'  
  },{
    name: 'Neptune', 
    image: 'http://ste.india.com/sites/default/files/2015/12/16/442079-neptune.jpg'  
  },{
    name: 'Jupiter', 
    image: 'http://www.nasa.gov/sites/default/files/thumbnails/image/jupapr3color-jd-170304.png'  
  },{
    name: 'Earth', 
    image: 'http://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg'  
  },{
    name: 'Venus', 
    image: 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAwMC8xMjQvb3JpZ2luYWwvMDcxMTI3LXZlbnVzLXN1cmZhY2UtMDIuanBn'  
  },
  
]


const students = [
  {
    name: 'Saffron Star', 
    email: 'saffron@interplanetary.com',
    campusId: 1
  }, {
    name: 'Cassia Moon', 
    email: 'casia@interplanetary.com',
    campusId: 1
  }, {
    name: 'Juniper Commet', 
    email: 'juniper@interplanetary.com',
    campusId: 2
  },
  {
    name: 'Atlas Aris', 
    email: 'atlas@interplanetary.com',
    campusId: 2
  }, {
    name: 'Apollo Moss', 
    email: 'apollo@interplanetary.com',
    campusId: 3
  },{
    name: 'Athena Astroid', 
    email: 'athena@interplanetary.com',
    campusId: 3
  },{
    name: 'Olympia Atrastaz', 
    email: 'olympia@interplanetary.com',
    campusId: 4
  },{
    name: 'Adhara Dustartia', 
    email: 'sapphire@interplanetary.com',
    campusId: 4
  },{
    name: 'Astra Achilles', 
    email: 'astra@interplanetary.com',
    campusId: 5
  },{
    name: 'Orion Zosma', 
    email: 'orion@interplanetary.com',
    campusId: 5
  },{
    name: 'Zues Sapid', 
    email: 'zues@interplanetary.com',
    campusId: 6
  },{
    name: 'Venus Epsilon', 
    email: 'venus@interplanetary.com',
    campusId: 6
  },{
    name: 'Nova Norippides', 
    email: 'nova@interplanetary.com',
    campusId: 7
  },{
    name: 'Elektra Hyperion', 
    email: 'elektra@interplanetary.com',
    campusId: 7
  },{
    name: 'Nuetron Norides', 
    email: 'nuetron@interplanetary.com',
    campusId: 8
  },{
    name: 'Aurora Borealis', 
    email: 'aurora@interplanetary.com',
    campusId: 8
  },
]
  
  
  db.sync({force: true})
    .then(()=>{
      return Campus.bulkCreate(campuses)
    })
    // .then((campuses)=>{
    //   return Student.bulkCreate(students)
    // })
    .catch(err=>{
      console.log('There was a problem', err)
    })