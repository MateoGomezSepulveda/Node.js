import express from "express";
import cors from "cors";
import barriosRoutes from "./routes/barrios.routes.js";
import departamentosRouter from "./routes/departamentos.routes.js";
import municipiosRouter from "./routes/municipios.routes.js";
import comunasRouter from "./routes/comunas.routes.js";
import creyentesRouter from "./routes/creyentes.routes.js";

const app = express();

app.set("port", 5002);
// Cors
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use("/api/barrios", barriosRoutes);
app.use("/api/departamentos", departamentosRouter);
app.use("/api/municipios", municipiosRouter);
app.use("/api/comunas", comunasRouter);
app.use("/api/creyentes", creyentesRouter);

export default app;