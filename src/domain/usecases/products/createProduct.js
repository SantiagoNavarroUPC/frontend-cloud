import Product from "../../models/product";
import ProductRepository from "../../../infrastructure/repositories/productRepository";

export default class CreateProduct {
  static async execute(productData) {
    const product = new Product(
      null, // ID será generado por la API
      productData.name,
      productData.description,
      productData.price,
      productData.categoryId,
      productData.state || "activo"
    );// Imprimir datos
    return await ProductRepository.createProduct(product);
  }
}
