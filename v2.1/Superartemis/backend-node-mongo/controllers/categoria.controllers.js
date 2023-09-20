import Categoria from "../models/Categorias.js";

const obtenerCategorias = async (req,res) =>{

    const categorias = await Categoria.find();
    
    res.json(categorias);
}

const agregarCategoria = async (req,res) =>{
    const categoria = new Categoria(req.body);

    try {
        const nuevaCategoria = await categoria.save();
        res.json(nuevaCategoria);   
    } catch (error) {
        console.log(error);
    }
    
}

const borrarCategoria = async (req,res) =>{
    try {
        await Categoria.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Categoria no existe"})
    }
}

const actualizarCategoria = async (req,res) =>{
    try {
        const categoria = await Categoria.findOne({_id: req.params.id})
        if (req.body.imagen){
            categoria.imagen = req.body.imagen;
        }

        if (req.body.CategoriaNombre){
            categoria.CategoriaNombre = req.body.CategoriaNombre
        }
        if (req.body.Descripccion){
            categoria.Descripccion = req.body.Descripccion;
        }

        await categoria.save()
        res.send(Categoria)
    } catch (error) {
        res.status(404)
        res.send({error: "Categoria no existente"})
    }
}

export {obtenerCategorias, agregarCategoria, borrarCategoria,actualizarCategoria};