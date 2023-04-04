import React from 'react'

const ProductScreen = ({activeProduct}) => {
  return (
    <div className='product-screen row'>
      <div className="col-12 col-md-6 mb-3 d-flex justify-content-center align-items-start">
        <img src={`${process.env.PUBLIC_URL}/assets/${activeProduct.img}.jpg`} alt="Imagen de producto" />
      </div>
      <div className="col-12 col-md-6">
        <h6 className='text-muted'>FITNESS ARMY</h6>
        <h1 className='fw-normal'>{activeProduct.desc}</h1>
        <p>${activeProduct.precio} USD</p>
        <div>
          <span>Quantity</span>
          <div className='counter-wrapper mt-1 d-flex justify-content-between align-items-center'>
            <i className='icono fa fa-minus fw-lighter'></i>
            <span className='fw-bold'>{1}</span>
            <i className='icono fa fa-plus'></i>
          </div>
        </div>
        <div className='addCart-button text-center mt-3'>Add to cart</div>
        <div className='properties-wrapper text text-muted mt-3'>
          <h5>Propiedades</h5>
          <ul>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis minus suscipit est quaerat, voluptates illum doloremque rerum aut! Nam reprehenderit aliquam praesentium earum quis doloribus vel exercitationem maiores commodi!</p>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
