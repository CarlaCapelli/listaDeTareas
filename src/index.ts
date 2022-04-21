let lista = document.getElementsByClassName("prod");
let ingr = document.getElementById("nuevoProducto");
let boton = document.getElementById("btn");
console.log(lista);
boton?.addEventListener("click", function () {
  lista.push("ingr.value");
});
