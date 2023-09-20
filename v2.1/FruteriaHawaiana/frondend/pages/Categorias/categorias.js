import { getCategoria } from "./API.js";

document.addEventListener("DOMContentLoaded", ()=>{
    cargarCategoria()
});


async function cargarCategoria(){
    const categorias = await getCategoria();
    const arrayCategorias = categorias.categorias

    const tablaCategoria = document.querySelector('#datosCategoria');
    console.log(categorias.categorias);
    arrayCategorias.forEach(element => {
        const {_id,nombre, estado} = element
        tablaCategoria.innerHTML += `
        <div class="card" style="margin: 1rem; width: 12rem;">
              <img src="/frondend/pages/Categorias/images/3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <h5 class="card-title">Estado:  ${estado}</h5>
                <a href="#" class="btn btn-danger" style="width: 11rem;">Entrar</a>
              </div>
        </div>
    `;
        
    });
    

    
   


}