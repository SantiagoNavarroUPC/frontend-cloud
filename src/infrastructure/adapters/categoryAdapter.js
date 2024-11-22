export default class CategoryAdapter {
    static toApi(category) {
      return {
        name: category.name,
        description: category.description,
        state: category.state,
      };
    }
  
    static fromApi(data) {
      return {
        id: data.id,
        name: data.name,
        description: data.description,
        state: data.state,
      };
    }
  }
  