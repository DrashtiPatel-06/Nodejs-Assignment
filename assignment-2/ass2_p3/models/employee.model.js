const mongoose = require('mongoose');
const EmployeeSchema  = new mongoose.Schema({
    username:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    phoneno:{
        type : Number,
        required : true
    },
    image : {
        type : String
    }

})
mongoose.model('Employee',EmployeeSchema)