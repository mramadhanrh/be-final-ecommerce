import { Router } from "express";
import {
  getProductItem,
  getProductList,
  postCreateProduct,
} from "../controllers/productsControllers.js";

const router = Router();

router.get("/:id", getProductItem);
router.get("/list", getProductList);
router.post("/create", postCreateProduct);

export default router;
