import express from "express";
import path from "path";
import cors from "cors";
import { getCategories } from "./controllers/apiController";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/api/categories", getCategories);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
