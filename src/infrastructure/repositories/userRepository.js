import axiosInstance from "../api/axiosConfig";
import UserPort from "../../application/ports/userPort";

export default class UserRepository extends UserPort {
  static async getAllUsers() {
    const response = await axiosInstance.get("/users");
    return response.data.body;
  }

  static async createUser(userData) {
    const response = await axiosInstance.post("/users", userData);
    return response.data;
  }

  static async updateUser(id, userData) {
    const response = await axiosInstance.put(`/users/${id}`, userData);
    return response.data;
  }

  static async deleteUser(id) {
    const response = await axiosInstance.delete(`/users/${id}`);
    return response.data;
  }
}

