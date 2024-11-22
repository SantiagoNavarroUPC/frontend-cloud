export default class Category {
    constructor(id, name, description, state) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.state = state; // booleano para saber si está activo
    }
  }
  