import '../../pages/users/users.css';
import React, { useState, useEffect } from 'react';
import { FaPlus, FaSave } from 'react-icons/fa';
import UserService from '../../../application/services/userService'; // Importa el servicio

const UsersForm = ({ user, tags, handleSubmit, closeForm }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    lastname: '',
    email: '',
    phone: '',
    type: '',
    state: 'activo', // Incluye estado por defecto
  });

  useEffect(() => {
    if (user) {
      setFormData(user); // Inicializa el formulario con los datos del usuario a editar
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        // Actualizar usuario existente
        await UserService.updateExistingUser(user.id, formData);
        alert('Usuario actualizado correctamente');
      } else {
        // Crear nuevo usuario
        await UserService.createNewUser(formData);
        alert('Usuario agregado correctamente');
      }
      setFormData({
        id: '',
        name: '',
        lastname: '',
        email: '',
        phone: '',
        type: '',
        state: 'activo',
      }); // Resetea el formulario
      handleSubmit(); // Notifica al componente padre que se realizó una acción
      closeForm(); // Cierra el formulario
    } catch (error) {
      alert(`Error al procesar el formulario: ${error.message || 'Ocurrió un error inesperado'}`);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-users">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        name="lastname"
        value={formData.lastname}
        onChange={handleInputChange}
        placeholder="Apellido"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Correo electrónico"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Teléfono"
        required
      />
      <select
        name="type"
        value={formData.type}
        onChange={handleInputChange}
        required
      >
        <option value="">Tipo de usuario</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {user ? <FaSave /> : <FaPlus />}
          {user ? 'Actualizar' : 'Agregar'} Usuario
        </button>
        <button type="button" onClick={closeForm} className="btn-secondary">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default UsersForm;

