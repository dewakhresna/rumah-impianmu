import express from "express";
import chatController from "../controllers/chat.controller";
import houseController from "../controllers/house.controller";

const router = express.Router();

router.post("/chat/send", chatController.chat);

router.post("/houses/create", houseController.create);
router.get("/houses", houseController.getAll);
router.get("/houses/:id", houseController.getById);
router.put("/houses/:id", houseController.update);
router.delete("/houses/:id", houseController.delete);

export default router;
