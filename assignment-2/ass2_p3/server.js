//npm install expresshandlebars --save i
require('./models/db')
const express = require('express')
const app = express();
const path = require('path')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const multer = require('multer');
const employeeController = require('./controllers/employeeController')


var Storage = multer.diskStorage({
    destination : (req,file,cb) => { 
        cb(null,"public/upload/");
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})


app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(multer({
    storage:Storage
}).single('file'));

app.use(bodyparser.json())
app.set('views',path.join(__dirname,'/views/'));
app.use('/public',express.static(path.join(__dirname,'public')));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout: 'mainLayouts',layoutsDir: __dirname+'/views/layouts/'}));
app.set('view engine','hbs');
app.listen(3000);
app.use('/employee',employeeController)