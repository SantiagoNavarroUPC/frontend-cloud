import { useState } from 'react';
import Header from  '../../components/menu/header'
import Sidebar from '../../components/menu/sidebar'
import UsersTable from '../../components/users/table_users';
import './users.css'

const Users = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <UsersTable /> {/* Tabla de productos */}
    </div>
  );
}

export default Users;