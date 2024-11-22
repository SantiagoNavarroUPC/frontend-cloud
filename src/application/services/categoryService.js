import CreateCategory from "../../domain/usecases/categories/createCategory";
import UpdateCategory from "../../domain/usecases/categories/updateCategory";
import DeleteCategory from "../../domain/usecases/categories/deleteCategory";
import ListCategories from "../../domain/usecases/categories/listCategories";

export default class CategoryService {
  static async fetchAllCategories() {
    return await ListCategories.execute();
  }

  static async createNewCategory(categoryData) {
    return await CreateCategory.execute(categoryData);
  }

  static async updateExistingCategory(id, categoryData) {
    return await UpdateCategory.execute(id, categoryData);
  }

  static async removeCategory(id) {
    return await DeleteCategory.execute(id);
  }
}
