const express = require('express');
const fs = require('fs');
const app = express();

app.get('/products', (req, res) => {
    fs.readFile('./products/products.json', 'utf8', (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    });
  });
  
  app.get('/',(req, res) => {
    res.send('/products')
});
  
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchado en el puerto ${server.address().port}`)
})



