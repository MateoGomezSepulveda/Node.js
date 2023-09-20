import { getProducto } from "./API.js";

document.addEventListener("DOMContentLoaded", ()=>{
    cargarProducto()
});


async function cargarProducto(){
    const producto = await getProducto();
    const arrayProductos = producto.productos

    const tablaProducto = document.querySelector('#datosProducto');
    console.log(producto.productos);
    arrayProductos.forEach(element => {
        const {_id,nombre, estado} = element
        tablaProducto.innerHTML += `
        <div class="card" style="margin: 1rem; width: 12rem;">
              <img src="/frondend/pages/Productos/images/2.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <h5 class="card-title">Estado:  ${estado}</h5>
                <a href="#" class="btn btn-danger" style="width: 11rem;">Entrar</a>
              </div>
        </div>
    `;
        
    });
    

    
   


}