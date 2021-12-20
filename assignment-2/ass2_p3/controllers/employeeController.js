const express = require('express')
var router = express.Router()
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.use(express.static(__dirname+"../public/"));

router.get('/',(req,res) => {
   // var success = req.file.filename + "uploaded succesfully"
    res.render('employee/addOrEdit',{
        ViewTitle:"Insert Employee",
    })
})

router.post('/',(req,res)=>{
    if(req.body._id=='')
        insertrecord(req,res);
    else
        updaterecord(req,res);
})

function insertrecord(req,res)
{
    var employee = new Employee();
    employee.username=req.body.username;
    employee.password=req.body.password;
    employee.phoneno=req.body.phoneno;
    const image = req.file;
    
    employee.image = image.path.replace("\\","/");

    employee.save((err,doc)=>{
        if(!err)
        {
            //console.log(res.body)
            res.redirect('employee/list')
        }
        else
        {
            console.log(err)
        }
    })
    
}
function updaterecord(req,res)
{

    Employee.findById(req.body._id).then(employee => {

        employee.username=req.body.username;
        employee.password=req.body.password;
        employee.phoneno=req.body.phoneno;
        const image = req.file;
        if(image){
        employee.image = image.path.replace("\\","/");
    }
        employee.save((err,doc)=>{
            if(!err)
            {
                //console.log(res.body)
                res.redirect('employee/list')
            }
            else
            {
                console.log(err)
            }
        })

    });


}
router.get('/list',(req,res)=>{
    Employee.find((err,docs)=>{
    if(!err)
    {
        res.render("employee/list",{
            list:docs
        });
    }
    else
    {
        console.log('Error in retrieving student list:'+err);      
    }
    
    }).lean();
})
router.get('/:id',(req,res)=>{
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err)
        {
            res.render("employee/addOrEdit",{
                ViewTitle:"Update employee",
                employee:doc
            });
        }
    }).lean();
})
router.get('/delete/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
    if(!err)
    {
        res.redirect('/employee/list');
    }
    else
    {
        console.log('error in student delete:'+err);
    }
    }).lean();
});    
module.exports=router;