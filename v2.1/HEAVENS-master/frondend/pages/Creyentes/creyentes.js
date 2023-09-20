import { getCreyente } from "./API.js";

document.addEventListener("DOMContentLoaded", cargarCreyente);
const tablaCreyente = document.querySelector('#datosCreyente');

async function cargarCreyente(){
    const creyente = await getCreyente();
    console.log(creyente);
    creyente.forEach(element =>{
        const {idCreyente,nombre,email,nroCelular,direccion,idBarrio} = element;
        tablaCreyente.innerHTML+=`
        <tr>
            <th scope="row">${idCreyente}</th>
            <th>${nombre}</th>
            <th>${email}</th>
            <th>${nroCelular}</th>
            <th>${direccion}</th>
            <th>${idBarrio}</th>
        </tr>
        `
    });
}