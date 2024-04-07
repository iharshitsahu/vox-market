const express =require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add',(req,res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result)=>{
        console.log(result);
        res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    })
});


router.post('/authenticate', (req,res)=>{
    console.log(req.body);
    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json(result);
        else res.status(400).json({message:'Login Failed'})
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
module.exports= router;