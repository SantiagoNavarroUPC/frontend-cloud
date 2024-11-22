import { useState } from 'react';
import Header from  '../../components/menu/header'
import Sidebar from '../../components/menu/sidebar'
import CategoriesTable from '../../components/categories/table_categories';
import './categories.css'

const Categories = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <CategoriesTable /> {}
    </div>
  );
}

export default Categories;