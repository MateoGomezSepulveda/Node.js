import { getMunicipio } from "./API.js";

document.addEventListener("DOMContentLoaded", cargarMunicipio);
const tablaMunicipio = document.querySelector('#datosMunicipio');

async function cargarMunicipio(){
    const municipio = await getMunicipio();
    console.log(municipio);
    municipio.forEach(element =>{
        const {idMunicipio,nombreMunicipio,idDepartamento} = element;
        tablaMunicipio.innerHTML+=`
        <tr>
            <th scope="row">${idMunicipio}</th>
            <th>${nombreMunicipio}</th>
            <th>${idDepartamento}</th>
        </tr>
        `
    });
}

