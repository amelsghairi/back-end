const mongoose = require('mongoose')

 const Prodact = mongoose.model('Prodact',{
      title:{
        type:String
      },

      discp:{
        type:String
      },
      
      image:{
        type:String
      },
      
     
      


 })

 module.exports = Prodact