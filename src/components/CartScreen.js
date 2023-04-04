import React from 'react'
import { NavLink } from 'react-router-dom'
import { products } from '../data/data'

const CartScreen = () => {
  return (
    <div className='cart-wrapper'>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Your Cart</h2>
        <NavLink to='/catalog'>Continue shoping</NavLink>
      </div>
      <table className='table fw-lighter'>
        <thead>
          <tr>
            <td>Product</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='d-md-flex'>
              <img src={`${process.env.PUBLIC_URL}/assets/producto1.jpg`} alt="imagen de producto" />
              <span className=''>
                <p className='fw-normal'>{products[0].desc}</p>
                <span>$45.00</span>
              </span>
            </td>
            <td>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div className='counter-wrapper mt-1 me-2 mb-3 mb-sm-0 d-flex justify-content-between align-items-center'>
                  <i className='icono fa fa-minus fw-lighter'></i>
                  <span className='fw-bold'>{1}</span>
                  <i className='icono fa fa-plus me-sm-3'></i>
                </div>
                <i className='icono fa fa-trash'></i>
              </div>
            </td>
            <td>$45.00</td>
          </tr>
          <tr>
            <td className='d-md-flex'>
              <img src={`${process.env.PUBLIC_URL}/assets/producto2.jpg`} alt="imagen de producto" />
              <span className=''>
                <p className='fw-normal'>{products[1].desc}</p>
                <span>$38.00</span>
              </span>
            </td>
            <td>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div className='counter-wrapper mt-1 me-2 mb-3 mb-sm-0 d-flex justify-content-between align-items-center'>
                  <i className='icono fa fa-minus fw-lighter'></i>
                  <span className='fw-bold'>{1}</span>
                  <i className='icono fa fa-plus me-sm-3'></i>
                </div>
                <i className='icono fa fa-trash'></i>
              </div>
            </td>
            <td>$38.00</td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-center justify-content-md-end">
        <span className="text-muted">Subtotal  $83.00</span>
      </div>
    </div>
  )
}

export default CartScreen
