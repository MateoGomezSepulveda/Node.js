const urlGetPro = "http://localhost:8021/api/productos";

export const getProducto = async () =>{
    try {
        const producto = await fetch(`${urlGetPro}`);
        const result = await producto.json();
        return result;    
    } catch (error) {
        console.log(error);
    }
}
