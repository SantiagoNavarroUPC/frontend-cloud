export default class Product {
    constructor(id, categoryId, name, description, price, state) {
      this.id = id;
      this.categoryId = categoryId;
      this.name = name;
      this.description = description;
      this.price = price;
      this.state = state; // booleano para saber si está activo
    }
  }
  