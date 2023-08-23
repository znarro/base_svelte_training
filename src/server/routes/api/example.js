import { Router } from "express";
import Example from "../../models/example.js";

const router = Router();

/* Ruta que obtiene listado de items */
router.get("/", async (_req, res) => {
  try {
    const example = new Example();
    const result = await example.getAll();
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error(error);
  }
});

export default router;
