import UserRepository from "../../../infrastructure/repositories/userRepository";

export default class CreateUser {
  static async execute(userData) {
    return await UserRepository.createUser(userData);
  }
}
