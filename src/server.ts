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

const mp3Directory = path.join(__dirname, "..", "mp3");
app.use("/mp3", express.static(mp3Directory));

app.get("/api/categories", getCategories);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
