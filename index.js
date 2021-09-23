const express = require("express")
const app = express()
app.set('view engine', 'ejs')


app.get("/",(req,res)=>{
    let nome = "Gustavo"
    let linguagem = "JavaScript"
    res.render('index',{
        nome : nome,
        lang: linguagem,
        empresa: "RRDOCS"
    })
})
app.get("/home",(req,res)=>{
    res.render('home')
})


app.listen(8080,()=>{
     console.log("app rodando")
})