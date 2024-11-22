export default class UserAdapter {
    static toApi(user) {
      return {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        type: user.type,
      };
    }
  
    static fromApi(data) {
      return {
        id: data.id,
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        type: data.type,
      };
    }
  }
  