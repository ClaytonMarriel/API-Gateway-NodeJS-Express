const app = require('express')(); //Instancia o express

//Cria uma rota
app.get('/users', (req, res) => res.send('Hello Users API'));

app.listen(3002, () => console.log(`Users API listening on port 3002!`));