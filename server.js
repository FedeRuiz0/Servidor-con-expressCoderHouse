const express = require('express');
const fs = require('fs');
const app = express();

app.get('/products', (req, res) => {
  fs.readFile('./products/products.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error al leer el archivo de productos' });
      return;
    }
    res.send(JSON.parse(data));
  });
});

app.get('/', (req, res) => {
  fs.readFile('./products/products.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error al leer el archivo de productos' });
      return;
    }
    res.send(JSON.parse(data));
  });
});


const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor http escuchado en el puerto ${PORT}`);
});




