// Importación de los módulos
const express = require("express");
const app = express();

const PORT = 4000;

// Obtener los datos del fichero json
const datosJSON = require("./data/customers.json");

app.get("/", (req, res) => {
  res.json(datosJSON);
});


app.get("/:nombre", (req, res) => {
  console.log(req.params.nombre);
  const nombre = req.params.nombre
  const customer = datosJSON.filter((customer) => customer.name === nombre)
  if(customer.length === 0) {
    res.status(404).send("<h1>El cliente no existe</h1>")
    return
  }
  res.json(customer)
});

app.get("/:nombre/:apellido", (req, res) => {
  console.log(req.params.nombre);
  const nombre = req.params.nombre
  const apellido = req.params.apellido
  const customer = datosJSON.filter((customer) => customer.name === nombre && customer.surname === apellido )
  if(customer.length === 0) {
    res.status(404).send("<h1>El cliente no existe</h1>")
    return
  }
  res.json(customer)
});

app.use((req, res) => {
  res.status(404).send("<h1>Estoy en una ruta no encontrada</h1>");
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado...`);
});

