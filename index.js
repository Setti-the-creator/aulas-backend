const express = require('express');

const app = express();
app.use(express.json())













app.post("/exercicio1/", (req, res) => {
    // http://localhost:3000/exercicio1
    const num1 = req.body.num1
    const num2 = req.body.num2

    const resultado = Number(num1) + Number(num2);

    res.json({ resultadoPost: resultado })
})

app.post("/exercicio2/", (req, res) => {
    // http://localhost:3000/exercicio2
    const num1 = req.body.num1
    const num2 = req.body.num2
    const num3 = 30;

    const resultado = (Number(num1) * Number(num2) * num3);

    res.json({ "Você ganha por mês ": resultado })
})

app.post("/exercicio3/", (req, res) => {
    // http://localhost:3000/exercicio3
    const num1 = req.body.num1
    const num2 = req.body.num2
    const num3 = req.body.num3
    const num4 = req.body.num4
    const num5 = req.body.num5
    const num6 = 5;
    
 
    const resultado1 = num1 + num2 + num3 + num4 + num5;
    const resultado2 = resultado1 / num6;
    console.log(resultado1)
    res.json({ "Você ganha por mês ": resultado2 })
})




app.post("/exercicio5/", (req, res) => {
    // http://localhost:3000/exercicio5
    const num1 = req.body.num1
    const num2 =  1.60934;

    const resultado = Number(num1) * num2;

    res.json({ 'Quantidade de Milhas em Km': resultado })
})


app.post("/exercicio6/", (req, res) => {
    // http://localhost:3000/exercicio6
    const num1 = req.body.num1
    const num2 =  3600;
    const num3 = 60;

    const resultado1 = Number(num1) / num2;
    const resultado2 = Number(num1) / num3;

    res.json({ 'Tempo do evento em horas ': resultado1, 'e em minutos': resultado2 })
   
})


app.post("/exercicio7/", (req, res) => {
    // http://localhost:3000/exercicio7
    const num1 = req.body.num1
    const num2 =  1000;
    const num3 = 100000;

    const resultado1 = Number(num1) * num2;
    const resultado2 = Number(num1) *  num3;

    res.json({ 'A distancia em metros é ': resultado1, 'e centimetros é': resultado2 })
   
})


app.post("/exercicio8/", (req, res) => {
    // http://localhost:3000/exercicio8
    const num1 = req.body.num1
  
    const dados = []
        for(let i = 0; i <= 10; i++ )
            { 
                dados.push(num1 * i);  
            }
   
            
    res.json(dados)
   
})



// app.get("/exercicio2/", (req, res) => {
//     // http://localhost:3000/exercicio2/?num1=0&num2=3
//     const num1 = req.query.num1
//     const num2 = req.query.num2

//     const resultado = Number(num1) - Number(num2);

//     res.json({ resultado: resultado })
// })

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})