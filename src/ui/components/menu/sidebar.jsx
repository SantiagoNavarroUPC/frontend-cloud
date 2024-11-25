import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BsFillGrid1X2Fill, 
  BsBoxSeam, 
  BsListCheck, 
  BsPeopleFill, 
  BsBoxArrowRight 
} from 'react-icons/bs';
import '../../pages/menu/menu.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [setExit] = useState(false);
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate('/'); // Ruta para el panel principal
  };

  const handleProducts = () => {
    navigate('/products'); // Ruta para productos
  };

  const handleCategories = () => {
    navigate('/categories'); // Ruta para categorías
  };

  const handleUsers = () => {
    navigate('/users'); // Ruta para usuarios
  };

  const handleLogout = () => {
    setExit(true);
    navigate('/'); // Redirigir al login
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsFillGrid1X2Fill className="icon_header" /> GESTIÓN
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <button className="icon sidebar-button" onClick={handleDashboard}>
            <BsFillGrid1X2Fill /> Panel de Inicio
          </button>
        </li>
        <li className="sidebar-list-item">
          <button className="icon sidebar-button" onClick={handleProducts}>
            <BsBoxSeam /> Productos
          </button>
        </li>
        <li className="sidebar-list-item">
          <button className="icon sidebar-button" onClick={handleCategories}>
            <BsListCheck /> Categorías
          </button>
        </li>
        <li className="sidebar-list-item">
          <button className="icon sidebar-button" onClick={handleUsers}>
            <BsPeopleFill /> Usuarios
          </button>
        </li>
        <li className="sidebar-list-item">
          <button className="icon sidebar-button" onClick={handleLogout}>
            <BsBoxArrowRight /> Salir
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
