import React from 'react'
import { products } from '../../data/data'

const PriceFilter = ({ handlePrice, priceStatus }) => {
  return (
    <div className={"price-wrapper d-flex flex-column justify-content-between " + (!priceStatus && 'price-close')}>
      <div>
        <hr className="dropdown-divider" />
        <div className='d-flex justify-content-between align-items-baseline'>
          <div className="text-center">
            <span className='fs-4 d-block'>Filter and Sort</span>
            <span className='fs-6 d-block text-muted'>{products.length} products</span>
          </div>
          <i className='icono fa fa-close' onClick={handlePrice}></i>
        </div>
        <hr className="dropdown-divider" />
        <div onClick={handlePrice} className='d-flex justify-content-start align-items-center text-muted my-4'>
          <i className="icono fa fa-arrow-left"></i>
          <span>Price</span>
        </div>
        <p>The highest price is $45.00</p>
        <div className="row g-2">
          <div className="col-6">
            <div className="form-floating">
              <input type="number" className="form-control" id="price-from" />
              <label htmlFor="price-from">From</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating">
              <input type="number" className="form-control" id="price-to" />
              <label htmlFor="price-to">To</label>
            </div>
          </div>
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

export default PriceFilter
