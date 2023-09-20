import { getDepartamento } from "./API.js";

document.addEventListener("DOMContentLoaded", cargarDepartamento);
const tablaDepartamento = document.querySelector('#datosDepartamento');

async function cargarDepartamento(){
    const departamento = await getDepartamento();
    console.log(departamento);
    departamento.forEach(element =>{
        const {idDepartamento,nombreDepartamento} = element;
        tablaDepartamento.innerHTML+=`
        <tr>
            <th scope="row">${idDepartamento}</th>
            <th>${nombreDepartamento}</th>
            <td><button type="button" data-propietario="${idDepartamento}" class="btn btn-primary delete">Borrar</button></td>
            <td><button type="button" data-propietario="${idDepartamento}" class="btn btn-primary update">Actualizar</button></td>

        </tr>
        `
    });
}
