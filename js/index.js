const header = document.getElementById("head");
header.className = "header";
const carritoStorage = document.createElement("button");
carritoStorage.className = "botonCarrito";
carritoStorage.innerHTML = `Carrito de compras`;
carritoStorage.addEventListener("click", () => {
  cajaCarrito.style.display = "block";
});
const cajaCarrito = document.createElement("div");
cajaCarrito.className = "modalCarrito";
const botonCerrar = document.createElement("button");
botonCerrar.innerHTML = "X";
botonCerrar.className = "botones";
botonCerrar.addEventListener("click", () => {
  cajaCarrito.style.display = "none";
});
const divCarrito = document.createElement("div");
const botonBorrar = document.createElement("button");
botonBorrar.innerHTML = "Eliminar contenido de carrito";
botonBorrar.className = "botones";
botonBorrar.addEventListener("click", () => {
  localStorage.removeItem("Articulos");
  divCarrito.innerHTML = "Carrito Vacio";
  carritoDeCompras = [];
});
const botonComprar = document.createElement("button");
botonComprar.innerHTML = "Comprar";
botonComprar.className = "botones";
botonComprar.addEventListener("click", () => {
  if (carritoDeCompras.length === 0) {
    divCarrito.innerHTML = "Primero debes ingresar productos al carrito";
  } else {
    carritoDeCompras = [];
    localStorage.removeItem("Articulos");
    divCarrito.innerHTML = "GRACIAS POR SU COMPRA";
  }
});

cajaCarrito.append(botonCerrar);
cajaCarrito.append(divCarrito);
cajaCarrito.append(botonBorrar);
cajaCarrito.append(botonComprar);

header.append(carritoStorage);
header.append(cajaCarrito);

const inventario = [
  {
    id: 1,
    descripcion: "Bicicleta de Ruta Specialized Tarmac SL7 Comp",
    precio: 1200000,
    imagen:
      "https://www.clubinriders.com/wp-content/uploads/2022/09/Bicicleta-de-Ruta-Specialized-Tarmac-SL7-Comp.png",
  },
  {
    id: 2,
    descripcion: "Bicicleta de Ruta SBK Speed Road Tiagra",
    precio: 9000000,
    imagen:
      "https://biciurbana.com.ar/13392-thickbox_default/bicicleta-de-ruta-sbk-speed-road-tiagra.jpg",
  },
  {
    id: 3,
    descripcion: "Bicicleta De Ruta Ram Road R700 14 Velocidades Gravel",
    precio: 1300000,
    imagen:
      "https://resources.claroshop.com/medios-plazavip/mkt/63d2b2561d698_dise-o-sin-t-tulo-8-jpg.jpg",
  },
  {
    id: 4,
    descripcion: "Bicicleta de montaña Rockrider ST 900",
    precio: 700000,
    imagen:
      "https://contents.mediadecathlon.com/p1650501/k$365e232c6c6c92a56c4a5f45f10b5c32/sq/BICICLETA+DE+MONTA+A+DOBLE+SUSPENSI+N+ROCKRIDER+ST+900+S+27+5+11V+GRIS.jpg",
  },
  {
    id: 5,
    descripcion: "Wader Bicicleta de montaña con cuadro de aluminio",
    precio: 900000,
    imagen:
      "https://a1.soysuper.com/a179690808d1ce015be5794db25899fa.1024.0.0.0.wmark.07e9948d.jpg",
  },
  {
    id: 6,
    descripcion: "Bicicleta de Montaña Zigna Cobalt 26 Gris",
    precio: 650000,
    imagen:
      "https://tse3.mm.bing.net/th?id=OIP.L38gMA2iq27HprI1ySSLmAHaF7&pid=Api&P=0&w=300&h=300",
  },
  {
    id: 7,
    descripcion:
      "MBM Boulevard Bicicleta de Paseo, Hombre, Titanio, 50 Centimeters",
    precio: 450000,
    imagen:
      "https://images-na.ssl-images-amazon.com/images/I/81npChiuaxL._AC_SL1500_.jpg",
  },
  {
    id: 8,
    descripcion: "Bicicleta Paseo/Urbana CROSS Modelo Jasmin",
    precio: 430000,
    imagen:
      "https://crossbike.com.pe/498-large_default/bicicleta-paseourbana-cross-modelo-jasmin.jpg",
  },
  {
    id: 9,
    descripcion:
      "Bicicleta de paseo 28'' Urban Life B-Pro · Deportes · El Corte Inglés",
    precio: 470000,
    imagen:
      "http://sgfm.elcorteingles.es/SGFM/dctm/MEDIA02/CONTENIDOS/201409/29/00108451201258____2__1000x1000.jpg",
  },
  {
    id: 10,
    descripcion: "Bicicleta de Paseo Lamborghini Rodado 26 Verde",
    precio: 550000,
    imagen:
      "https://images.fravega.com/f1000/cc40885ee8fba6e13f201c1ce1824412.jpg",
  },
];

const contenedorProductos = document.getElementById("contenedorProductos");
contenedorProductos.className = "contain";

inventario.forEach((p) => {
  const cardContenedor = document.createElement("div");
  cardContenedor.className = "card";
  const imagenProducto = document.createElement("img");
  imagenProducto.src = p.imagen;
  imagenProducto.className = "img";
  const descripProducto = document.createElement("h5");
  descripProducto.innerHTML = p.descripcion;
  descripProducto.className = "h5";
  const precioProducto = document.createElement("p");
  precioProducto.innerHTML = `$${p.precio}`;
  const botonProducto = document.createElement("button");
  botonProducto.id = "carrito";
  botonProducto.innerHTML = "Agregar al carrito";
  botonProducto.className = "botonCarrito";

  cardContenedor.append(imagenProducto);
  cardContenedor.append(descripProducto);
  cardContenedor.append(precioProducto);
  cardContenedor.append(botonProducto);
  contenedorProductos.append(cardContenedor);

  botonProducto.addEventListener("click", () => {
    anadirCarrito(p.id);
  });
});

let carritoDeCompras = [];

function anadirCarrito(id) {
  const producto = inventario.find((producto) => producto.id == id);
  carritoDeCompras.push(producto);
  localStorage.setItem("Articulos", JSON.stringify(carritoDeCompras));
  mostrarProductoCarrito();
}

function mostrarProductoCarrito() {
  let total = 0;
  divCarrito.innerHTML = "";
  carritoDeCompras.forEach((c) => {
    const listaCarrito = `<p>Nombre: ${c.descripcion} - Precio: $${c.precio}</p>`;
    divCarrito.innerHTML += listaCarrito;
    total += c.precio;
  });

  const totalPrecio = document.createElement("p");
  totalPrecio.innerHTML = `Total: $${total}`;
  divCarrito.append(totalPrecio);
}

mostrarProductoCarrito();
