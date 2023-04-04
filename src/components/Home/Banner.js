import React from 'react'
import {useNavigate} from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className='banner container-fluid bg-secondary d-flex justify-content-center align-items-center'
      style={{
        backgroundImage:`url(${process.env.PUBLIC_URL}/assets/suplementos.jpg)`,
        backgroundSize: 'cover'
      }}
    >
      <button onClick={()=>{navigate('/catalog')}} className='banner-button'>Comprar aquí</button>
    </div>
  )
}

export default Banner
