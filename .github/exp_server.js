//for local server 
const exp = require("express");
const app = exp();
// console.log(exp);

app.use('/virtual_path',exp.static('public'));//for image and css file
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
});

app.get("/flights/:From?.:To?",(req, res)=>{
    console.log(req.params)
    res.send("Search for flights: " + "From: " + req.params.From + " To: " + req.params.To);
});
app.listen(3000,()=>console.log("Server run port 3000 Sucess "));