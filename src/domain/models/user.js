export default class User {
    constructor(id, name, lastName, email, password, token, type) {
      this.id = id;
      this.name = name;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.token = token;
      this.type = type; // administrador o vendedor
    }
  }
  