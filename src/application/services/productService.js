import CreateProduct from "../../domain/usecases/products/createProduct";
import FetchProducts from "../../domain/usecases/products/listProduct";
import UpdateProduct from "../../domain/usecases/products/updateProduct";
import DeleteProduct from "../../domain/usecases/products/deleteProduct";

export default class ProductService {
  static async fetchAllProducts() {
    return await FetchProducts.execute();
  }

  static async createNewProduct(productData) {
    return await CreateProduct.execute(productData);
  }

  static async updateExistingProduct(id, productData) {
    return await UpdateProduct.execute(id, productData);
  }

  static async removeProduct(id) {
    return await DeleteProduct.execute(id);
  }
}
