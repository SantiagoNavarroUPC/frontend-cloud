import ProductRepository from "../../../infrastructure/repositories/productRepository";

export default class FetchProducts {
  static async execute() {
    return await ProductRepository.getAllProducts();
  }
}
