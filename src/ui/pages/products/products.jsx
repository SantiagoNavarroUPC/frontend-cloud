import { useState } from 'react';
import Header from  '../../components/menu/header'
import Sidebar from '../../components/menu/sidebar'
import ProductsTable from '../../components/products/table_products';
import './products.css'

const Products = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <ProductsTable /> {/* Tabla de productos */}
    </div>
  );
}

export default Products;
