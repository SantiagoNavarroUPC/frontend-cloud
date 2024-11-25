import ProductRepository from "../../../infrastructure/repositories/productRepository";

export default class UpdateProduct {
  static async execute(id, productData) {
    return await ProductRepository.updateProduct(id, productData);
  }
}
