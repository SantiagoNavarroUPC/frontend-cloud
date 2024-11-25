import React from 'react';
import { FaPlus, FaSave } from 'react-icons/fa';
import ProductService from '../../../application/services/productService'; // Importa el servicio

const ProductForm = ({
  formData,
  editingProduct,
  handleInputChange,
  handleSubmit, // Recibido del componente padre
  resetForm,
  categories,
}) => {
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevenir comportamiento por defecto del formulario
    try {
      // Datos que se enviarán al backend
      const productData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price), // Convertir el precio a número
        category_id: parseInt(formData.category), // Convertir la categoría a número
        state: formData.state,
      };
  
      console.log('Datos enviados al backend:', productData); // Imprime los datos
  
      if (editingProduct) {
        await ProductService.updateExistingProduct(editingProduct.id, productData);
        alert('Producto actualizado correctamente');
      } else {
        await ProductService.createNewProduct(productData);
        alert('Producto creado correctamente');
      }
  
      resetForm(); // Reiniciar formulario
      handleSubmit(); // Notificar al componente padre para actualizar la tabla
    } catch (error) {
      alert(`Error al procesar el formulario: ${error.message || 'Ocurrió un error inesperado'}`);
    }
  };
  

  return (
    <form onSubmit={handleFormSubmit} className="form-products">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Nombre del producto"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Descripción"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
        placeholder="Precio"
        step="0.01"
        required
      />
      <select
        name="category"
        value={formData.category} // Aquí se usará el ID de la categoría
        onChange={handleInputChange}
        required
      >
        <option value="">Seleccionar categoría</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <select
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        required
      >
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
      </select>
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {editingProduct ? <FaSave /> : <FaPlus />}
          {editingProduct ? 'Actualizar' : 'Agregar'} Producto
        </button>
        {editingProduct && (
          <button type="button" onClick={resetForm} className="btn-secondary">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
