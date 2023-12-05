import { Router } from "express";
import {
  getProductItem,
  getProductList,
  postCreateProduct,
} from "../controllers/productsControllers.js";
import { handleValidateAccess } from "../middlewares/authMiddleware.js";

const router = Router();

// Products dilindungi oleh middleware authentication
// Sehingga diperlukan access token pada headers
router.use(handleValidateAccess);

router.get("/:id", getProductItem);
router.get("/list", getProductList);
router.post("/create", postCreateProduct);

export default router;
