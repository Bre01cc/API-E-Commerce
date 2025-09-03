// Import da biblioteca express
const express = require('express');
//
const app = express()


const userRoutes = require('./src/routes/clientRouters');


app.use(express.json())
//Definir a porta em que o servidor irá escutar
const porta = 8000;

//http://localhost:8000/ 
//Testando a requisição do servidor
app.get('/', (req, res) => {
    res.send("API de  está funcionando");

})
app.use('/api/users',userRoutes)

//listen que faz o servidor ouvir requisições de uma porta que nesse caso é a porta 8000
app.listen(porta,() =>{
    console.log(`servidor rodando em http://localhost:${porta}`);
    
})