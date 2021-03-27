
const dataService = require('./services/data.service');

const express= require('express');

const app = express();
 
app.use(express.json());


app.get('/',(req,res)=>{
    res.status(299).send("Get method");
})

app.post('/',(req,res)=>{
    res.send("Post method");
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    const result = dataService.register(req.body.acno,req.body.username,req.body.password);
    console.log(res.send(result.message));
})
app.post('/login',(req,res)=>{
    console.log(req.body);
    const result = dataService.login(req.body.acno,req.body.password);
    console.log(res.send(result.message));
})
app.put('/',(req,res)=>{
    res.send("Put method");
})
app.patch('/',(req,res)=>{
    res.send("Patch method");
})
app.delete('/',(req,res)=>{
    res.send("Delete method");
})

app.listen(3003,()=>{
     console.log(" server will run at port 3003");
    })

