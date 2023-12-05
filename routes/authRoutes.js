import { Router } from "express";
import { postAuthLogin } from "../controllers/authControllers.js";

const router = Router();

router.post("/login", postAuthLogin);

export default router;
