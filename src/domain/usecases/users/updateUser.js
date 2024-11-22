import User from "../../models/user";
import UserRepository from "../../../infrastructure/repositories/userRepository";

export default class UpdateUser {
  static async execute(id, userData) {
    const user = new User(
      id,
      userData.name,
      userData.lastName,
      userData.email,
      userData.password,
      userData.state
    );
    return await UserRepository.updateUser(id, user);
  }
}

