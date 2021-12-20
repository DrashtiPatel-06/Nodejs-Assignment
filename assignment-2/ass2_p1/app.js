const express = require('express')
const fileupload = require('express-fileupload')
const path=require('path')

const app = express()

app.set('view engine','ejs')

app.use(
    fileupload({
        useTempFiles:true,
        tempFileDir:path.join(__dirname,'tmp'),
        createParentPath:true,//automatically create folder
        //limits:{fileSize:1024},
    }))

app.get('/',async(req,res,next)=>{
    res.render('index')
})

app.post('/single',async(req,res,next)=>{
    try{
        const file=req.files.mFile  
        console.log(file)
        const fileName= new Date().getTime().toString()+path.extname(file.name)
        const savePath=path.join(__dirname,'public','uploads',fileName)

        // if(file.truncated)
        // {
        //     throw new Error('file size is too big...')
        // }

        // if(file.mimetype!=='image/jpeg'){
        //     throw new Error('only jpegs are supported')
        // }
        await file.mv(savePath)
        res.redirect('/')

    }catch(error){
        console.log(error)
        res.send('Error uploading file ')
    }
})

app.post('/multiple',async(req,res,next)=>{
    try{
            const files=req.files.mFiles  
            console.log(files)
            // let promises=[]
            // files.forEach((file)=>{
            // const savePath=path.join(__dirname,'public','uploads',file.name)
            // promises.push(file.mv(savePath))
            //})

            const promises=files.map((file)=>{
                const savePath=path.join(__dirname,'public','uploads',file.name)
                return file.mv(savePath)
            })
            await Promise.all(promises)
        res.redirect('/')

    }catch(error){
        console.log(error)
        res.send('Error uploading file ')
    }
})
app.listen(8000,()=>console.log('server on port 8000'))