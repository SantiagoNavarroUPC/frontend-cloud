import ProductRepository from "../../../infrastructure/repositories/productRepository";

export default class DeleteProduct {
  static async execute(id) {
    return await ProductRepository.deleteProduct(id);
  }
}
