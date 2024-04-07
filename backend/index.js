const express = require('express');
const productRouter =require('./routers/productRouter');
const userRouter =require('./routers/userRouter');
const contactRouter =require('./routers/contactRouter');
const utilRouter =require('./routers/utilRouter');
const cors = require('cors');
const app= express();
const port = 5000;

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use('/product',productRouter);
app.use('/user',userRouter);
app.use('/contact',contactRouter);
app.use('/util',utilRouter)

app.listen(port, ()=>{console.log('server strted'); } );