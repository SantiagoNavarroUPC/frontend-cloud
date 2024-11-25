import ProductPort from "../../application/ports/productPort";
import axiosInstance from "../api/axiosConfig";

export default class ProductRepository extends ProductPort {
  static async getAllProducts() {
    const response = await axiosInstance.get("/products");
    return response.data.body;
  }

  static async createProduct(productData) {
    console.log('Enviando datos al backend para creación:', productData); // Imprimir datos
    const response = await axiosInstance.post("/products", productData);
    return response.data;
  }

  static async updateProduct(id, productData) {
    const response = await axiosInstance.put(`/products/${id}`, productData);
    return response.data;
  }

  static async deleteProduct(id) {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response.data;
  }
}
