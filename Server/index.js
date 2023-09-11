const express = require("express");

const cors = require("cors");

const phonesData = require('./phoneMockData.json');

const app = express();

app.use(cors());

const port = 5000;


app.get('/',(req,res)=>{
    res.send(phonesData);
})

app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const phData = phonesData.find((data)=>id===data.id);
    res.send(phData);
})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})