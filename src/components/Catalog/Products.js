import React from 'react'

const Products = ({ urlImg, desc, precio }) => {
  return (
    <div className='product-wrapper d-flex flex-column justify-content-between'>
      <img className='product-img' src={`${process.env.PUBLIC_URL}/assets/${urlImg}.jpg`} alt="Imagen de producto" />
      <div>
        <p className='product-desc'>{desc}</p>
        <span className='product-cost'>${precio} USD</span>
      </div>
    </div>
  )
}

export default Products
