import { getComuna } from "./API.js";

document.addEventListener("DOMContentLoaded", cargarComuna);
const tablaComuna = document.querySelector('#datosComuna');

async function cargarComuna(){
    const comuna = await getComuna();
    console.log(comuna);
    comuna.forEach(element =>{
        const {idComuna,nombreColumna,idMunicipio} = element;
        tablaComuna.innerHTML+=`
        <tr>
            <th scope="row">${idComuna}</th>
            <th>${nombreColumna}</th>
            <th>${idMunicipio}</th>
        </tr>
        `
    });
}

