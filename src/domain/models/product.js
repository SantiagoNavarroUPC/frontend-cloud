export default class Product {
    constructor(id, name, description, price,categoryId,state) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.categoryId = categoryId
      this.state = state; // booleano para saber si está activo
    }
  }
  