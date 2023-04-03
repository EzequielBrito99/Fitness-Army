import React from 'react'

const Brand = () => {
  return (
    <div className='brand-wrapper mx-2 my-1'>
      <img src={`${process.env.PUBLIC_URL}/assets/promo.jpg`} alt="imagen de marca" />
    </div>
  )
}

export default Brand
