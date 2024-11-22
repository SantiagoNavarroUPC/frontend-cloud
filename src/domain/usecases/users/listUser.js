import UserRepository from "../../../infrastructure/repositories/userRepository";

export default class FetchUsers {
  static async execute() {
    return await UserRepository.getAllUsers();
  }
}
