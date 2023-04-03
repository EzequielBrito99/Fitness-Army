import React from 'react'
import Banner from './Banner'
import Products from '../Catalog/Products'
import { products } from '../../data/data'

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <span className='fs-4 my-3'>Featured Products</span>
      <div className="row mt-2">
        {
          products.map((e, i) => (
            <div key={i} className="col-6 col-md-3">
              <Products urlImg={e.img} desc={e.desc} precio={e.precio} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeScreen
