export function contar(texto) {
    let contador = 0;

    for (const letra of texto.toLowerCase()) {
        if ("aeiou".includes(letra)) {
            contador++;
        }
    }

    return contador;
}

export function crearCajas(colores, contenedor) {
    for (const color of colores) {
        const caja = document.createElement("div");
        caja.classList.add("caja", color);
        contenedor.appendChild(caja);
    }
}

import {cambiarColores} from "/assets/js/ejercicios/modulos/modulo.js";  
const boton2 = document.getElementById("boton2");
boton2.addEventListener ("click",()=>{
 cambiarColores();
 });




