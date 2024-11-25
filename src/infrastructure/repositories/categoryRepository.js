import axiosInstance from "../api/axiosConfig";
import CategoryPort from "../../application/ports/categoryPort";

export default class CategoryRepository extends CategoryPort {
  static async getAllCategories() {
    const response = await axiosInstance.get("/categories");
    return response.data.body;
  }

  static async createCategory(categoryData) {
    const response = await axiosInstance.post("/categories", categoryData);
    return response.data;
  }

  static async updateCategory(id, categoryData) {
    const response = await axiosInstance.put(`/categories/${id}`, categoryData);
    return response.data;
  }

  static async deleteCategory(id) {
    const response = await axiosInstance.delete(`/categories/${id}`);
    return response.data;
  }
}
