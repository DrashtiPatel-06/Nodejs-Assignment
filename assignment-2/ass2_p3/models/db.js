// npm i --save express mongoose express-handlebars body-parser
// npm install -g nodemon
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Employyedb')
.then(()=>{
    console.log('success')
}).catch((err)=>{
    console.log(err)
})
require('./employee.model')