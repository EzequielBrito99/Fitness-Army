import React from 'react'

const Promo = () => {
  return (
    <div className='promo-wrapper text-center my-4'>
      <img src={`${process.env.PUBLIC_URL}/assets/promo.jpg`} alt="imagen de promocion" />
    </div>
  )
}

export default Promo
