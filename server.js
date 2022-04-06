const express = require("express");
const { Router } = express;
const ProductosApi = require("./api/productos.js");

// router de productos

const productosApi = new ProductosApi();

const productosRouter = new Router();

// servidor

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api/productos", productosRouter);

//RUTAS LLAMANDO A LOS METODOS DE LA CLASE
app.get("/api/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send(productosApi.listar(id));
});

app.get("/api/productos", (req, res) => {
  res.send(productosApi.listarAll());
});

app.post("/api/productos", (req, res) => {
  const productos = req.body;
  res.send(productosApi.guardar(productos));
});

app.put("/api/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send(productosApi.actualizar(id));
});

app.delete("/api/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send(productosApi.borrar(id));
});

app.all("*", (req, res) => {
  res.send("La ruta indicada no existe");
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
