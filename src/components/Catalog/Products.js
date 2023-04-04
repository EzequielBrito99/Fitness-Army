import React from 'react'
import {useNavigate} from 'react-router-dom'

const Products = ({ urlImg, desc, precio, setActiveProduct, currentProduct }) => {

  const navigate = useNavigate();

  const handleProductSelect = () => {
    setActiveProduct(currentProduct);  
    navigate('/product');  
  };

  return (
    <div onClick={handleProductSelect} className='product-wrapper d-flex flex-column justify-content-between'>
      <div className="product-img-wrapper">
        <img className='product-img' src={`${process.env.PUBLIC_URL}/assets/${urlImg}.jpg`} alt="Imagen de producto" />
      </div>
      <div>
        <p className='product-desc'>{desc}</p>
        <span className='product-cost'>${precio} USD</span>
      </div>
    </div>
  )
}

export default Products
