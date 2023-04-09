const express = require('express');
const router = express.Router();
const User = require('../models/user');

const bcrypt = require('bcrypt')

router.post('/register', async(req,res)=>{
    data = req.body;
    usr  = new User(data);
    salt = bcrypt.genSaltSync(10);
    cryptedPass = await bcrypt.hashSync(data.password ,  salt );
    usr.password = cryptedPass;
    usr.save()
    .then(
        (saved)=>{
            res.status(200).send(saved)
        }
        
    )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )

});



    router.get('/getall', async(req,res)=>{
        try{
            users =  await User.find()
             res.send(users)
        }
      
     
        
    
      
      catch(err)
        {
            res.send(err)
        }
      
     });
    
    
     router.get('/getbyid/:id', async(req,res)=>{
        try{
            myid = req.params.id
        user =   await  User.findOne({ _id : myid })
        res.send(user)
    
        }
       
      
        catch(err)
           {
                res.send(err)
            }
        
     })
     router.put('/update/:id',(req,res)=>{
        id = req.params.id
        newData = req.body ; 
        User.findByIdAndUpdate({_id:id}, newData)
        .then(
            (update)=>{
                res.send(update)
            }
        )
        .catch((err)=>{
            res.send(err)
        })
     });
     router.put('/up/:id',async(req,res)=>{
        try{
            id = req.params.id
            newData = req.body ; 
            update = await  User.findByIdAndUpdate({_id:id}, newData)
            res.send(update)
           
        }
        
       
        catch(err){
            res.send(err)
        }
     });
     router.delete('/delete/:id',async(req,res)=>{
        try{
        id = req.params.id
         deleteUser = await User.findByIdAndDelete({_id:id})
           res.send(deleteUser)
            }
                 catch (err){ 
             res.send (err)
            }
            
    
     });





module.exports = router