const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const { data } = require('./data')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get('/topRankings', (req,res)=>{
    const tempOffset=senitize(req.query.offset)?Number(req.query.offset):0;
    const tempLimit=senitize(req.query.limit)?Number(req.query.limit):20;

    const result=data.slice(tempOffset,tempLimit+tempOffset);
    
    res.status(200).send(result);
 
 });
 
 const senitize=(val)=>{
     if(val===null || val===undefined || isNaN(val))
     return false;
 
     return true;
 }


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;