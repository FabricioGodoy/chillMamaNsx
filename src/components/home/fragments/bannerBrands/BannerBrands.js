import React from 'react'
import './bannerBrands.css'

const BannerBrands = () => {
  return (
    <div className='bannerBrandContainer'>
      <img style={{ height: "700px", width: "100%" }} src={process.env.PUBLIC_URL + "/img/brandsWeWork.webp"} alt="" />
    </div>
  )
}

export default BannerBrands