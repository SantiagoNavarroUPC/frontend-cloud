import Category from "../../models/category";
import CategoryRepository from "../../../infrastructure/repositories/categoryRepository";

export default class UpdateCategory {
  static async execute(id, categoryData) {
    const category = new Category(
      id,
      categoryData.name,
      categoryData.description,
      categoryData.state
    );
    return await CategoryRepository.updateCategory(id, category);
  }
}
