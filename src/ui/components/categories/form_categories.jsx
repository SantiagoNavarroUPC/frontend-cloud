import React from 'react';
import { FaPlus, FaSave } from 'react-icons/fa';
import CategoryService from '../../../application/services/categoryService'; // Importa el servicio

const CategoryForm = ({ formData, editingCategory, handleInputChange, handleSubmit, resetForm }) => {
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    try {
      if (editingCategory) {
        // Actualizar categoría existente
        await CategoryService.updateExistingCategory(editingCategory.id, formData);
        alert('Categoría actualizada correctamente');
      } else {
        // Crear una nueva categoría
        await CategoryService.createNewCategory(formData);
        alert('Categoría agregada correctamente');
      }
      resetForm(); // Reiniciar el formulario
      handleSubmit(); // Notificar al componente padre
    } catch (error) {
      alert(`Error al procesar el formulario: ${error.message || 'Ocurrió un error inesperado'}`);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-categories">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Nombre de la categoría"
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
          {editingCategory ? <FaSave /> : <FaPlus />}
          {editingCategory ? 'Actualizar' : 'Agregar'} Categoría
        </button>
        {editingCategory && (
          <button type="button" onClick={resetForm} className="btn-secondary">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default CategoryForm;
