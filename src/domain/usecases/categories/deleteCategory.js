import CategoryRepository from "../../../infrastructure/repositories/categoryRepository";

export default class DeleteCategory {
  static async execute(id) {
    return await CategoryRepository.deleteCategory(id);
  }
}
