import express from "express";
import router from "./routes/api.js";
import cors from "cors";
import sequelize from "./db.js";

// Pastikan semua model diimpor agar terdaftar oleh Sequelize
import "./models/user.model.js";
import "./models/house.model.js";
import "./models/house_detail.model.js";
import "./models/favorite.model.js";


const app = express();

app.use(cors());

const PORT = 5000;
app.use(express.json());

app.use("/api", router);

app.use("/uploads", express.static("public/uploads"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Proses sinkronisasi akan membaca semua model yang telah diimpor di atas
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database tersinkronisasi!"));