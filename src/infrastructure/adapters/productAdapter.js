export default class ProductAdapter {
    static toApi(product) {
      return {
        name: product.name,
        description: product.description,
        price: product.price,
        state: product.state,
        categoryId: product.categoryId,
      };
    }
  
    static fromApi(data) {
      return {
        id: data.id,
        name: data.name,
        description: data.description,
        price: data.price,
        state: data.state,
        categoryId: data.categoryId,
      };
    }
  }
  