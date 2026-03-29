import express from "express";
import router from "./routes/api.js";
import cors from 'cors';
import HouseDetail from './models/house_detail.model.js';
import sequelize from './db.js';

const app = express();

app.use(cors());

const PORT = 5000;
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

sequelize.sync({ alter: true }).then(() => console.log("Database tersinkronisasi!"));