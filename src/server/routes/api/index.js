//**************************************/
// Lista de rutas que sirven como gateway hacia APIs
//**************************************/
import { Router } from "express";
import exampleRoutes from "./example.js";

const router = Router();

router.use("/example", exampleRoutes);

export default router;
