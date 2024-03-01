const express = require("express")
const app = express()

app.listen(8081, function()
{
    console.log("Servidor ativo")
})

app.get("/", function (req, res)
{
    console.log("Pagina principal")
    res.send("Pagina principal")
})

app.get("/cadastrar", function (req, res)
{
    console.log("Pagina cadastrar")
    res.send("Pagina cadastrar")
})
app.get("/produtos/:item/:quantidade", function(req, res)
{
    res.send( " item:" + req.params.item + " quantidade:" + req.params.quantidade)

})

app.get("/contato", function(req, res)
{
    console.log("WPP: (11) 99836470")
    res.send("WPP: (11) 99836470")
})