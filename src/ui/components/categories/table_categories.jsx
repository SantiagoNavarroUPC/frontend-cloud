import React, { useState, useEffect } from 'react';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import CategoryForm from './form_categories';
import CategoryService from '../../../application/services/categoryService'; // Asegúrate de importar correctamente el servicio
import '../../pages/categories/categories.css';

const CategoriesTable = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    state: 'activo',
  });

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        const categoriesData = await CategoryService.fetchAllCategories();
        setCategories(Array.isArray(categoriesData) ? categoriesData : []);
      } catch (error) {
        alert(`Error al cargar las categorías: ${error.message || 'Error inesperado'}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const updatedCategories = await CategoryService.fetchAllCategories();
    setCategories(updatedCategories);
  };

  const startEditing = (category) => {
    setEditingCategory(category);
    setFormData(category);
  };

  const resetForm = () => {
    setEditingCategory(null);
    setFormData({ name: '', description: '', state: 'activo' });
  };

  const deleteCategory = async (id) => {
    try {
      await CategoryService.removeCategory(id);
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      alert(`Error al eliminar la categoría: ${error.message || 'Error inesperado'}`);
    }
  };

  if (isLoading) {
    return <div className="main-container">Cargando categorías...</div>;
  }

  return (
    <div className="main-container">
      <div className="main-title">
        <h3>Gestión de Categorías</h3>
      </div>
      <div className="main-table-categories">
        <div className="search-container">
          <div>
            <FaSearch />
            <input type="text" placeholder="Buscar categorías..." />
          </div>
        </div>
        <CategoryForm
          formData={formData}
          editingCategory={editingCategory}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
        />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <span className={category.state === 'activo' ? 'icon-green' : 'icon-red'}>
                    {category.state === 'activo' ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td>
                  <button onClick={() => startEditing(category)} className="btn-edit">
                    <FaEdit />
                  </button>
                  <button onClick={() => deleteCategory(category.id)} className="btn-delete">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesTable;
