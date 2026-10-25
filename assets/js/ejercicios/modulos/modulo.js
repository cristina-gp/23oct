import { contar, crearCajas } from "../ciclos/ciclos.js";

const boton = document.getElementById("boton");
const id = document.getElementById("uno");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
    const total = contar(id.value);
    resultado.textContent = `Tiene ${total} vocales`;
});

const colores = ["red", "blue", "green", "yellow", "purple"];
crearCajas(colores, document.getElementById("colores"));

  
const importes = [15, 50, 20, 120, 8, 90];
const lista = document.getElementById("listado");
for(const importe of importes){
    if(importe >30){
        const descuento = importe * 0.10;
const conDescuento =importe - descuento;
console.log(conDescuento);
const item = document.createElement("li");
 item.textContent  = `${conDescuento} €`;
lista.appendChild(item);
}
}

export function cambiarColores(){
const cambio = document.getElementById("cambio");
    cambio.style.color = "blue";
    document.body.style.backgroundColor = "yellow";
};
