import { Router } from "express";
import { join } from "path";

const router = Router();

/* Página de listado de items */
router.get("/", function (_req, res, _next) {
  res.sendHTML(join(process.cwd(), "dist", "layouts", "example.html"));
});

/* Página de un producto por ID */
// router.get("/:id", function (_req, res, _next) {
//   res.sendHTML(join(process.cwd(), "dist", "layouts", "detail.html"));
// });

export default router;
