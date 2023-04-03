import React from 'react'
import { brands } from '../../data/data'
import Brand from './Brand'
import Promo from './Promo'

const Footer = () => {


  return (
    <div className='footer-wrapper'>
      <hr className='dropdown-divider' />
      <Promo />
      <div className="d-flex flex-column flex-md-row align-items-center align-items-md-end justify-content-between">
        <div>
          <span>Suscribe to our email</span>
          <div className="footer-email-wrapper input-group my-2">
            <input id='email' type="email" placeholder='Email' className='form-control' aria-describedby='email' />
            <span id='email'><i className='icono fa fa-arrow-right'></i></span>
          </div>
        </div>
        <div className="footer-redes my-3 text-center">
          <i className='icono fa fa-facebook'></i>
          <i className='icono fa fa-instagram'></i>
        </div>
      </div>
      <hr className='dropdown-divider' />
      <div className="brand-list d-flex justify-content-center flex-wrap">
        {
          brands.map(e => (
            <Brand key={e.id} />
          ))
        }
      </div>
      <p className='copyright text-center text-muted mt-3'>
        @2023 Fitness Army | Powered by Ezequiel Brito
      </p>
    </div>
  )
}

export default Footer
