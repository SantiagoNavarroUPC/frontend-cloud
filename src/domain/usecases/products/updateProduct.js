import Product from "../../models/product";
import ProductRepository from "../../../infrastructure/repositories/productRepository";

export default class UpdateProduct {
  static async execute(id, productData) {
    const product = new Product(
      id,
      productData.name,
      productData.description,
      productData.price,
      productData.categoryId,
      productData.state
    );
    return await ProductRepository.updateProduct(id, product);
  }
}
