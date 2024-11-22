import CategoryRepository from "../../../infrastructure/repositories/categoryRepository";

export default class FetchCategories {
  static async execute() {
    return await CategoryRepository.getAllCategories();
  }
}
