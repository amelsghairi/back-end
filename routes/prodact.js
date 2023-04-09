const express = require('express');
const router = express.Router();
const Prodact = require('../models/prodact');

// import library  multer pou image 
const multer = require ('multer');


filename='';


// configuration pour importer les images
const mystorage = multer.diskStorage({
    destination :'./uploads' , 
    filename:(req , file, redirect)=>{
           
 let date = Date.now();
 let fl = date +'.'+ file.mimetype.split('/')[1];
 redirect(null, fl);
 filename=fl;





    }
})

const upload = multer({storage :mystorage});










router.post('/creatProdact',upload.any('image'), async(req , res)=>{
    try{
        prodact = req.body;
        // instance
        pro = new Prodact(prodact);
        pro.image= filename;
        savedProdact = await  pro.save()
        filename='';
        res.status(200).send(savedProdact)
    }
          catch(error) {
             res.status(400).send(error)
}

    
    });
    router.get('/getProdact', async(req,res)=>{
        try{
           prodacts = await Prodact.find()
           res.status(200).send(prodacts)

        }
        catch(err){
            res.status(400).send(err)
        }

    })






module.exports = router
