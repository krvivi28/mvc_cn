import express from "express";
import ProductController from "../controllers/product.controller.js";
const productController = new ProductController();
const router = express.Router();

router.route("/").get(productController.getProducts);
router.route("/list").get(productController.listProduct);
router.route("/add").post(productController.addProduct);
export default router;
