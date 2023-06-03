import ProductModel from "../models/product.model.js";
const productModel = new ProductModel();

export default class ProductController {
  getProducts = (req, res) => {
    let products = productModel.fetchProducts();
    res.render("product", { products });
  };
  listProduct = (req, res) => {
    res.render("add_product");
  };
  addProduct = (req, res) => {
    console.log(req.body);
    const productData = req.body;
    console.log(productData);
    res.send({ success: true, product: productData });
  };
}
