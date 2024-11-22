import React, { useState, useEffect } from 'react';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import ProductForm from './form_products';
import ProductService from '../../../application/services/productService'
import CategoryService from '../../../application/services/categoryService';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    state: 'activo',
  });

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        const productsData = await ProductService.fetchAllProducts();
        const categoriesData = await CategoryService.fetchAllCategories();
        setProducts(productsData);
        setCategories(Array.isArray(categoriesData) ? categoriesData : []);
      } catch (error) {
        alert(`Error al cargar los datos: ${error.message || 'Error inesperado'}`);
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
    const updatedProducts = await ProductService.fetchAllProducts();
    setProducts(updatedProducts);
  };

  const startEditing = (product) => {
    setEditingProduct(product);
    setFormData(product);
  };

  const resetForm = () => {
    setEditingProduct(null);
    setFormData({ name: '', description: '', price: '', category: '', state: 'activo' });
  };

  const deleteProduct = async (id) => {
    try {
      await ProductService.removeProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      alert(`Error al eliminar el producto: ${error.message || 'Error inesperado'}`);
    }
  };

  if (isLoading) {
    return <div className="main-container">Cargando productos...</div>;
  }

  return (
    <div className="main-container">
      <div className="main-title">
        <h3>Gestión de Productos</h3>
      </div>
      <div className="main-table-products">
        <div className="search-container">
          <div>
            <FaSearch />
            <input type="text" placeholder="Buscar productos..." />
          </div>
        </div>
        <ProductForm
          formData={formData}
          editingProduct={editingProduct}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
          categories={categories}
        />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.category}</td>
                <td>
                  <span className={product.state === 'activo' ? 'icon-green' : 'icon-red'}>
                    {product.state === 'activo' ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td>
                  <button onClick={() => startEditing(product)} className="btn-edit">
                    <FaEdit />
                  </button>
                  <button onClick={() => deleteProduct(product.id)} className="btn-delete">
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

export default ProductsTable;
