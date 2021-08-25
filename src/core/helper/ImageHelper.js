import React from 'react';
import { API } from '../../backend';


const ImageHelper = ({product}) => {

   const imageurl = product ?  `${API}/product/photo/${product._id}` : 
   `https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`
    //getting image from api/productid

    return (
        <div className="rounded border border-success p-2">
        <img
          src={imageurl}//getting image from api/productid
          alt="photo"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          className="mb-3 rounded"
        />
      </div>
    )
}

export default ImageHelper
