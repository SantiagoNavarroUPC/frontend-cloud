import CreateUser from "../../domain/usecases/users/createUser";
import FetchUsers from "../../domain/usecases/users/listUser";
import UpdateUser from "../../domain/usecases/users/updateUser";
import DeleteUser from "../../domain/usecases/users/deleteUser";

export default class UserService {
  static async fetchAllUsers() {
    return await FetchUsers.execute();
  }

  static async createNewUser(userData) {
    return await CreateUser.execute(userData);
  }

  static async updateExistingUser(id, userData) {
    return await UpdateUser.execute(id, userData);
  }

  static async removeUser(id) {
    return await DeleteUser.execute(id);
  }
}

