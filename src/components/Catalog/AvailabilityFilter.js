import React from 'react'
import { products } from '../../data/data'

const AvailabilityFilter = ({availabilityStatus, handleAviability}) => {
  return (
    <div className={"availability-wrapper d-flex flex-column justify-content-between " + (!availabilityStatus && 'availability-close')}>
        <div>
          <hr className="dropdown-divider" />
          <div className='d-flex justify-content-between align-items-baseline'>
            <div className="text-center">
              <span className='fs-4 d-block'>Filter and Sort</span>
              <span className='fs-6 d-block text-muted'>{products.length} products</span>
            </div>
            <i className='icono fa fa-close' onClick={handleAviability}></i>
          </div>
          <hr className="dropdown-divider" />
          <div onClick={handleAviability} className='d-flex justify-content-start align-items-center text-muted my-4'>
            <i className="icono fa fa-arrow-left"></i>
            <span>Availability</span>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="stock" />
            <label className="form-check-label" htmlFor="stock">
              In stock ({products.length})
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="out-stock" disabled />
              <label className="form-check-label" htmlFor="out-stock">
                Out of stock (0)
              </label>
          </div>
        </div>
        <div>
          <hr className="dropdown-divider" />
          <div className='d-flex justify-content-between'>
            <button className='filter-remove-button'>Clear</button>
            <button className='filter-apply-button'>Apply</button>
          </div>
        </div>
      </div>
  )
}

export default AvailabilityFilter
