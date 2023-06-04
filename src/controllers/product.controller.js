import ProductModel from "../models/product.model.js";
const productModel = new ProductModel();
export default class ProductController {
  getProducts = (req, res) => {
    let products = productModel.fetchProducts();
    res.render("product", { products });
  };
  listProduct = (req, res) => {
    const inputData = { name: null, price: null, img: null, desc: null };
    res.render("add_product", {
      error: null,
      inputData,
    });
  };
  addProduct = (req, res) => {
    const { name, desc, price, img } = req.body;
    let id = productModel.fetchProducts().length + 1;
    let newProduct = { id, name, desc, price, img };
    productModel.setProduct(newProduct);
    res.redirect("/");
  };
}
