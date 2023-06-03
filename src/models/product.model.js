import axios from "axios";
import { products } from "../assets/products.js";

export default class ProductModel {
  fetchProducts = () => {
    return products;
  };
}
