import express from "express";
import { getChatbotResponse } from "./controller.js";

const router = express.Router();

router.post("/chatbot", getChatbotResponse);

export default router;
