import React from 'react'
import { products } from '../../data/data'

const Filter = ({filterStatus, handleAviability, handlePrice, handleFilter}) => {
  return (
    <div className={'filter-wrapper d-flex flex-column justify-content-between ' + (!filterStatus && 'filter-close')}>
      <div>
        <hr className="dropdown-divider" />
        <div className='d-flex justify-content-between align-items-baseline'>
          <div className="text-center">
            <span className='fs-4 d-block'>Filter and Sort</span>
            <span className='fs-6 d-block text-muted'>{products.length} products</span>
          </div>
          <i className='icono fa fa-close' onClick={handleFilter}></i>
        </div>
        <hr className="dropdown-divider" />
        <div onClick={handleAviability} className='d-flex justify-content-between align-items-baseline text-muted my-4'>
          <span>Availability</span>
          <i className="icono fa fa-arrow-right"></i>
        </div>
        <div onClick={handlePrice} className='d-flex justify-content-between align-items-baseline text-muted my-4'>
          <span>Price</span>
          <i className="icono fa fa-arrow-right"></i>
        </div>
        <div className='d-flex justify-content-between align-items-baseline text-muted my-4'>
          <span className='flex-grow-1'>Sorty by:</span>
          <select className="form-select small" aria-label="Default select example">
            <option defaultValue>Alphabetically, A-Z</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div>
        <hr className="dropdown-divider" />
        <div className='d-flex justify-content-between'>
          <button className='filter-remove-button'>Remove all</button>
          <button className='filter-apply-button'>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
