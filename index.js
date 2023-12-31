import express from "express";
import routers from "./src/routes/route.js";

const app = express();

app.use(express.json());

app.use(routers);

const PORT = '3000O';

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});