const app = require('express')(); //Instancia o express

//Cria uma rota
app.get('/products', (req, res) => res.send('Hello Products API'));

app.listen(3001, () => console.log(`Products API listening on port 3001!`));
