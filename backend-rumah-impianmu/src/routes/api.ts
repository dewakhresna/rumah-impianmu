import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import chatController from "../controllers/chat.controller.js";
import houseController from "../controllers/house.controller.js";
import authController from "../controllers/auth.controller.js";
import houseDetailController from "../controllers/house_detail.controller.js";

const router = express.Router();

router.post("/chat/send", chatController.chat);

// --- RUTE HOUSE ---
router.post("/houses/create", houseController.create);
router.get("/houses", houseController.getAll);
router.get("/houses/:id", houseController.getById);
router.put("/houses/:id", houseController.update);
router.delete("/houses/:id", houseController.delete);

// --- RUTE HOUSE DETAILS ---
router.post("/house-details/create", houseDetailController.create);
router.get("/house-details/house/:house_id", houseDetailController.getByHouseId);
router.put("/house-details/house/:house_id", houseDetailController.update);
router.delete("/house-details/house/:house_id", houseDetailController.delete);

// --- RUTE OTENTIKASI (USER) ---
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.post("/auth/activation", authController.activation);

router.get("/auth/me", authMiddleware, authController.me);
router.put("/auth/profile", authMiddleware, authController.updateProfile);
router.put("/auth/password", authMiddleware, authController.updatePassword);

export default router;
