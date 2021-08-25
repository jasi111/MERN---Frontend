import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import { addItemToCart } from './helper/cartHelper';
import ImageHelper from './helper/ImageHelper';

const Card = ({
    product,
    addtoCart = true,//default property for add to cart button
    removeFromCart = false//default property for remove cart button
  }) => {

    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);//passsing one more propert to product that is count

    const cardTitle = product ? product.name : "A Photo from Pexels" //if product is present then get product's name else show "A phot from pexel"
    const cardDescription = product ? product.description : "Default Description"
    const cardPrice = product ? product.price : "Default cardPrice"

 //method 
 const addToCart = () =>{
     addItemToCart(//method from caarthelper
         product, () => setRedirect(true))//passsing product //call back is used because we had used next() in th emethod in cartHelper.js
         //in this call back setRedirect value to true
 }

    //method for redirect
    const getARedirect = (redirect) => {
        if (redirect){//base on this redirect
            return <Redirect to ="/cart"/>
        }
    }
    //method for showing Add to cart button when required
    const showAddToCart = (addtoCart) =>{//passing addtoCart valu as param
        return(
            addtoCart && (//if addtocart property is there then show this button 
                <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
            >
                Add to Cart
            </button>
            )
        )
    }

    const showRemoveFromCart = (removeFromCart) =>{//passing removeFromCart value
        return (
            removeFromCart && (
                <button
                            onClick={() => { }}
                            className="btn btn-block btn-outline-danger mt-2 mb-2"
                        >
                            Remove from cart
                        </button>
            )
        )

    }
    return (
        <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cardTitle}</div>
            <div className="card-body">
                {getARedirect(redirect)}
                <ImageHelper product={product} />
                <p className="lead bg-success font-weight-normal text-wrap">
                    {cardDescription}
                </p>
                <p className="btn btn-success rounded  btn-sm px-4">{cardPrice}</p>
                <div className="row">
                    <div className="col-12">
                       {showAddToCart(addtoCart)}
                    </div>
                    <div className="col-12">
                        {showRemoveFromCart(removeFromCart)}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Card
