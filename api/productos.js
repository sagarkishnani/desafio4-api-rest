class ProductosApi {
  constructor() {
    this.productos = [];
    this.id = 0;
  }

  listar(id) {
    const producto = this.productos.find((x) => x.id === id);
    return producto;
  }

  listarAll() {
    return this.productos;
  }

  guardar({ title, price, thumbnail }) {
    const producto = {
      id: this.productos.length + 1,
      title: title,
      price: price,
      thumbnail: thumbnail,
    };
    this.productos.push(producto);
  }

  actualizar({ title, price, thumbnail }, id) {
    const idProducto = this.productos.find((x) => x.id === id);
    const producto = {
      id: idProducto,
      title: title,
      price: price,
      thumbnail: thumbnail,
    };
    return producto;
  }

  borrar(id) {
    const producto = this.productos.find((x) => x.id === id);
    const index = this.productos.indexOf(producto);
    this.productos.splice(index, 1);

    return this.productos;
  }
}

module.exports = ProductosApi;
