const express = require("express")
const app = express()
app.set('view engine', 'ejs')


app.get("/:nome/:lang",(req,res)=>{
    let nome = req.params.nome
    let linguagem = req.params.lang
    let msg = false
    res.render('index',{
        nome : nome,
        lang: linguagem,
        empresa: "RRDOCS",
        msg: msg
    })
})
app.get("/home",(req,res)=>{
    res.render('home')
})


app.listen(8080,()=>{
     console.log("app rodando")
})