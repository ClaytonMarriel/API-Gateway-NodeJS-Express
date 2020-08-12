const app = require('express')();

app.get('/teste', (req, res) => res.send('Hello, Teste'));

app.listen(5000, () => console.log(`Hello, World`));