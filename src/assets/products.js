export class ProductData {
  static productsList = [
    {
      id: 1,
      name: "iphone",
      desc: "iphone12",
      price: 150000,
      img: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczg5LXBvbS0wMDgzLTAzLnBuZw.png?s=8qoA_bqZx0JgsXeYCcUcoPf2DtsMONJpzyBREwsDPHY",
    },
  ];
  constructor(id, name, desc, price, img) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.img = img;
    ProductData.productsList.push({ id, name, desc, price, img });
  }
  static getProducts() {
    return this.productsList;
  }
}
