import express, { json, urlencoded } from "express";
import session from "express-session";
import logger from "morgan";
import { join } from "path";
import cookieParser from "cookie-parser";
import i18n from "i18n";
import server from "./server.js";
import webRouter from "./routes/web/index.js";
import apiRouter from "./routes/api/index.js";
import settings from "../../config/settings.json" assert { type: "json" };

const environment = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || "3000";

const rootPath = process.cwd();

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(rootPath, "public")));

// Sirve el bundle de producción de la app
app.use(express.static(join(rootPath, "dist")));

// Rutas que cargan las páginas
app.use("/", server.handleRedirect, webRouter);
// Rutas que sirven como API gateway
app.use("/gateway", apiRouter);

global.environment = environment;
global.settings = settings[environment];

server.listen(app, PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
