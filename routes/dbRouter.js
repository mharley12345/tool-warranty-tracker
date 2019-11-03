require('dotenv').config()
const express = require('express');
const router = express.Router();
const db = require('../models/tool-model')
const algoliasearch = require('algoliasearch')
const appId = process.env.APP_ID
const apiKey = process.env.API_KEY
const client = algoliasearch(appId,apiKey)
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
    .then(tools => {
        res.status(200).json({tools})})
     .catch(err => {res.status(500).json({message:err.message})})
})

 router.get('/search/:filter',(req,res) =>{
 
 
     const body = req.body
     db.getByFilter(req.params.filter)
     .then(tool =>{
         if(tool){
             res.json(Change(tool))
         }else{
             res.status(404).json({message:"Soory Nothing Found"})
         }
     })
     .catch(err =>{
         res.status(500).json({message:err.message})
     })})
   
    
        

router.get('/:id',(req,res)=>{
    const Id = req.params.id
    console.log('Router',Id)
    db.getbyId(Id)
    .then(tool =>{
        if (tool){
           res.status(200).json({tool})
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