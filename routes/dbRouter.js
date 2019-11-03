const express = require('express');
const router = express.Router();
const db = require('../modules/tool-module')

const Change = (arr) =>{
  const Arr = arr.map(e =>{
       return {...e, completed: !!e.completed }
  })
  return Arr
}


// get routes
router.get('/' ,(req,res)=>{
    res.send("<h1>I Work</h1>")
})


router.get('/all',(req,res) =>{
    db.getAll()
    .then(tools => tools)
     .catch(err => {res.status(500).json({message:err.message})})
})
router.get('/:id',(req,res)=>{
    db.getbyId(req.param.id)
    .then(tool =>{
        if (tool){
            res.json(Change(tool))
        }else{
            res.status(404).json({message:"Sorry No Tools Found"})
        }
})
       .catch(err => {
           res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
       })
})
router.get('/range',(req,res)=>{
    db.getByExp(req.param.range)
    .then(tool =>{
        if (tool){
            res.json(Change(tool))
        }else{
            res.status(404).json({message:"Sorry No Tools Found"})
        }
})
       .catch(err => {
           res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
       })
})
// ADD

router.post('/addtool',(req,res)=>{
    db.add(req.body)
    .then(tool =>{
        res.status(201).json({newTool : tool})
    })
    .catch(err =>{
        res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
    })
})

    



module.exports=router