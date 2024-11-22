import User from "../../models/user";
import UserRepository from "../../../infrastructure/repositories/userRepository";

export default class CreateUser {
  static async execute(userData) {
    const user = new User(
      null, // ID será generado por la API
      userData.name,
      userData.lastName,
      userData.email,
      userData.password,
      userData.token || null, // Token opcional
      userData.type
    );
    return await UserRepository.createUser(user);
  }
}
