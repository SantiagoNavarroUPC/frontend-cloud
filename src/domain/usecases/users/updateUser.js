import UserRepository from "../../../infrastructure/repositories/userRepository";

export default class UpdateUser {
  static async execute(id, userData) {
    return await UserRepository.updateUser(id, userData);
  }
}

