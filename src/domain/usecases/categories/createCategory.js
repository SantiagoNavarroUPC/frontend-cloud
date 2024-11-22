import Category from "../../models/category";
import CategoryRepository from "../../../infrastructure/repositories/categoryRepository";

export default class CreateCategory {
  static async execute(categoryData) {
    const category = new Category(
      null, // ID será generado por la API
      categoryData.name,
      categoryData.description,
      categoryData.state || "activo"
    );
    return await CategoryRepository.createCategory(category);
  }
}
