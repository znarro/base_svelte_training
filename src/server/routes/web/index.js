//**************************************/
// Lista de rutas que cargan las páginas
//**************************************/
import { Router } from "express";
import { join } from "path";
import exampleRoutes from "./example.js";

const router = Router();

router.use("/", exampleRoutes);
router.use("/example", exampleRoutes);

export default router;
