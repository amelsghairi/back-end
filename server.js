const express = require('express');
const productRouter = require('./routes/prodact');
const userRouter = require('./routes/user');
 require('./config/connect');
const app = express();

 app.use (express.json());


app.use('/prodact',productRouter );
app.use('/user', userRouter );
app.use('/getimage',express.static('./uploads'));

 

app.listen(3000  , ()=>{
    console.log('server work')
});