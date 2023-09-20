import { getBarrio, getIdBarrio,  } from "./API.js";

document.addEventListener("DOMContentLoaded", cargarBarrio);
const tablaBarrio = document.querySelector('#datosBarrio');

async function cargarBarrio(){
    const barrio = await getBarrio();
    console.log(barrio);
    barrio.forEach(element =>{
        const {idBarrio,nombreBarrio,idComuna} = element;
        tablaBarrio.innerHTML+=`
        <tr>
            <th scope="row">${idBarrio}</th>
            <th>${nombreBarrio}</th>
            <th>${idComuna}</th>
        </tr>
        `
    });
}

