import { loginUsuario } from "./api.js";

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#login');
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        await logearUsuario();
    });

    const logearUsuario = async () => {
        const cedula = document.querySelector('#cedula').value;
        const pin = document.querySelector('#pin').value;

        if (!cedula || !pin) {
            mostrarMensaje("Por favor completa todos los campos");
            return;
        }
        const logear = {
            cedula,
            pin
        };
        loginUsuario(logear)      
    };

    const mostrarMensaje = (mensaje) => {
        const mensajeDiv = document.querySelector('#mensaje');
        mensajeDiv.textContent = mensaje;
        mensajeDiv.style.display = "block";
    };
});
