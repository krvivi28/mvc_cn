import { ProductData } from "../assets/products.js";

export default class ProductModel {
  fetchProducts = () => {
    return ProductData.getProducts();
  };
  setProduct = (product) => {
    new ProductData(
      product.id,
      product.name,
      product.desc,
      product.price,
      product.img
    );
  };
}
