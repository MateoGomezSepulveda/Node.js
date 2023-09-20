const Producto = require('../models/Producto.js')
const {response} = require('express')

// Mostrar Categorias
const getProductos = async(req, res)=>{

    const {hasta=8, desde=0} = req.query;
    const query = {estado:true}

    const [total, productos] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
            .populate('usuario', ['nombre, email'])
            .populate('categoria', 'nombre')
            .skip( Number(desde))
            .limit(Number(hasta))
    ]);

    res.json({
        total,
        productos
    })
}

// Mostrar categoria mediante el id y que muestre el id del que registro y el nombre
const getProducto = async (req, res = response)=>{
    const {id} = req.params;
    const producto = await Producto.findById(id)
        .populate('usuario','nombre')
        .populate('categoria', 'nombre');
    res.json(producto);
}


// El methos HHTP post nos deja ingresar la categoria con el usuario correspondiente con la url del token
const postProducto = async(req, res = response)=>{

    const {estado, usuario, ...body} = req.body;

    const productoDB = await Producto.findOne({nombre: body.nombre});

    if(productoDB){
        return res.status(400).json({
            msg: `El producto ${productoDB.nombre}, ya existe`
        });
    }

    const data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        usuario: req.usuario._id
    }

    const producto = new Producto(data);

    await producto.save();

    res.status(201).json(producto);

}

// se actualiza con put el nombre de la categoria toca ponerle el id de la categoria y el token del ADMIN
const putProducto = async (req,res = response)=>{
    const {id} = req.params;
    const {estado, usuario, ...data} = req.body;

    data.nombre = data.nombre.toUpperCase();
    data.usuario = req.usuario._id;

    const producto = await Producto.findByIdAndUpdate(id, data, {new: true});
    res.json(producto);
}

const deleteProducto = async (req, res = response)=>{
    const {id} = req.params;
    const producto = await Producto.findByIdAndUpdate(id, {estado: false});
    res.json(producto)
}

module.exports = {
    getProducto,
    getProductos,
    postProducto,
    putProducto,
    deleteProducto
}