import UsersForm from './form_users';
import '../../pages/users/users.css';
import { FaSearch,FaEdit, FaTrash } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import UserService from '../../../application/services/userService';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    type: '',
  });

  const tags = ['administrador', 'vendedor'];

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        const usersData = await UserService.fetchAllUsers();
        setUsers(Array.isArray(usersData) ? usersData : []);
      } catch (error) {
        alert(`Error al cargar los usuarios: ${error.message || 'Error inesperado'}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const handleSubmit = async () => {
    const updatedUsers = await UserService.fetchAllUsers();
    setUsers(updatedUsers);
  };

  const startEditing = (user) => {
    setEditingUser(user);
    setFormData(user);
  };

  const resetForm = () => {
    setEditingUser(null);
    setFormData({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      type: '',
    });
  };

  const deleteUser = async (id) => {
    try {
      await UserService.removeUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      alert(`Error al eliminar el usuario: ${error.message || 'Error inesperado'}`);
    }
  };

  const filteredUsers = formData.type
    ? users.filter((user) => user.type === formData.type)
    : users;

  if (isLoading) {
    return <div className="main-container">Cargando usuarios...</div>;
  }

  return (
    <div className="main-container">
      <div className="main-title">
        <h3>Gestión de Usuarios</h3>
      </div>
      <div className="main-table-users">
        <div className="search-container">
          <div>
            <FaSearch />
            <input type="text" placeholder="Buscar usuarios..." />
          </div>
        </div>
        <UsersForm
          user={editingUser}
          tags={tags}
          updateUser={handleSubmit}
          closeForm={resetForm}
        />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Tipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.type.charAt(0).toUpperCase() + user.type.slice(1)}</td>
                <td>
                  <button onClick={() => startEditing(user)} className="btn-edit">
                    <FaEdit />
                  </button>
                  <button onClick={() => deleteUser(user.id)} className="btn-delete">
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

export default UsersTable;

