import React, { useState } from 'react'
import { products } from '../../data/data'
import AvailabilityFilter from './AvailabilityFilter';
import Filter from './Filter';
import PriceFilter from './PriceFilter';
import Products from './Products'

const CatalogScreen = ({setActiveProduct}) => {

  const [filterStatus, setFilterStatus] = useState(false);
  const [availabilityStatus, setAviabilityStatus] = useState(false);
  const [priceStatus, setPriceStatus] = useState(false);

  const handleFilter = () => {
    setFilterStatus(!filterStatus);
  };

  const handleAviability = () => {
    setAviabilityStatus(!availabilityStatus);
  };

  const handlePrice = () => {
    setPriceStatus(!priceStatus);
  };

  return (
    <div className='catalog-wrapper'>
      <h2>Products</h2>
      <div className="text-muted d-flex justify-content-between">
        <span onClick={handleFilter}><i className='icono fa fa-sort'></i>Filter and sort</span>
        <span>{products.length} products</span>
      </div>
      <div className="row mt-2">
        {
          products.map((e, i) => (
            <div key={i} className="col-6 col-md-3">
              <Products urlImg={e.img} desc={e.desc} precio={e.precio} setActiveProduct={setActiveProduct} currentProduct={e} />
            </div>
          ))
        }
      </div>
      <Filter filterStatus={filterStatus} handleFilter={handleFilter} handleAviability={handleAviability} handlePrice={handlePrice} />
      <AvailabilityFilter availabilityStatus={availabilityStatus} handleAviability={handleAviability}/>
      <PriceFilter handlePrice={handlePrice} priceStatus={priceStatus} />
    </div>
  )
}

export default CatalogScreen
