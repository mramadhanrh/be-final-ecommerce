import { Router } from "express";
import { postAuthenticateUser } from "../controllers/authControllers.js";

const router = Router();

router.post("/", postAuthenticateUser);

export default router;
