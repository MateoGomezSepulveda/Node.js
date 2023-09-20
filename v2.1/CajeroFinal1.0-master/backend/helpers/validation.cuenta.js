
import { Contador } from "../models/Contador.js";

const incrementarContador = async (req, res, next) => {
  try {
    const contador = await Contador.findOneAndUpdate({}, { $inc: { cuenta: 1 } }, { new: true, upsert: true });
    const numeroCuentaActual = String(contador.cuenta);
    const numeroCuentaCorregido = numeroCuentaActual.padStart(8, '0');
    req.numeroCuenta = numeroCuentaCorregido;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener el contador." });
  }
};

export default incrementarContador;
