const urlGetCate = "http://localhost:8021/api/categorias";

export const getCategoria = async () =>{
    try {
        const categoria = await fetch(`${urlGetCate}`);
        const result = await categoria.json();
        return result;    
    } catch (error) {
        console.log(error);
    }
}
