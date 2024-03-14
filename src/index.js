const express = require("express")
// imports the entire express library

const app = express();
// calling an instance of express application
const PORT = 3001;

app.listen(PORT, ()=> console.log(`Running express server on port ${PORT}!`))

app.get('/groceries',(request,response)=>{
    response.send([
        {
            item:"milk",
            quantity:"2",
        },
        {
            item:"cereal",
            quantity:"5",
        },
        {
            item:"powder",
            quantity:"3",
        },
    ])
});

