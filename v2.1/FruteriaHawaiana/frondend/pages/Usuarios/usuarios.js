import { getUsuarios, logerUsuario } from "./API.js";

document.addEventListener("DOMContentLoaded", async () => {
    const usuarios = await getUsuarios();
    const arrayUsuario = usuarios.usuarios;
    
    const tablaUsuario = document.querySelector('#datosUsuario');

    arrayUsuario.forEach(element => {
        const { nombre, rol } = element;
        tablaUsuario.innerHTML += `
            <div class="card" style="margin: 1rem; width: 14rem;">
                <img src="/frondend/pages/Usuarios/images/1.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <h5 class="card-title">${rol}</h5>
                    <form id="${nombre}" method="POST">
                        <input type="text" class="email" placeholder="email" required>
                        <input type="password" class="password" placeholder="password" required>
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </form>
                </div>
            </div>
        `;
    });

    const formulario = document.querySelector('#santiago2');
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        await loginUsuario();
    });

    const loginUsuario = async () => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        if (!password) {
            mostrarMensaje("Por favor complete los campos");
            return;
        }

        const logear = {
            email,
            password
        };

        logerUsuario(logear);
    };

    const mostrarMensaje = (mensaje) => {
        const mensajeDiv = document.querySelector('#mensaje');
        mensajeDiv.textContent = mensaje;
        mensajeDiv.style.display = "block";
    };
});
