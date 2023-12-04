import { Router } from "express";
import { postCreateUser } from "../controllers/usersControllers.js";

const router = Router();

router.post("/create", postCreateUser);

export default router;
