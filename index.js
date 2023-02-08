const express = require('express');
const cors = require('cors');
const router = require('./routes/route');
const connect = require('./config/db');


const app = express();

app.use(express.json());
app.use(cors());
app.use('/product',router);


const PORT = process.argv[2] || 8080 ;

app.listen(PORT,async()=>{
    try{
        console.log("server is listening on http://localhost:8080");
        await connect();
    }catch(err){
        console.error(err.message);
    }
    
})
