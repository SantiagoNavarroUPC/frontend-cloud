import UserRepository from "../../../infrastructure/repositories/userRepository";

export default class DeleteUser {
  static async execute(id) {
    return await UserRepository.deleteUser(id);
  }
}
