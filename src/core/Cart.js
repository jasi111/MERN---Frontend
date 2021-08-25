import React,{useState, useEffect} from 'react'
import "../styles.css"
import {API} from "../backend"
import Base from "./Base"
import Card from './Card'
import { getProducts } from './helper/coreapicalls'
import { loadCart } from './helper/cartHelper'


const Cart = () => {
    // console.log("api is" ,API)
    const [products, setProducts] = useState([]);//intialise useState with empty array , because products are in array
    


    const loadAllProducts = () => {
        return(
            <div>
                <h2>This section is to load products</h2>
                {products.map((product,index) => (//loop through the products - use map- when using map we get call back and in the call back i get each product and index
                    <Card//and bringing card component
                    key={index}//
                    product={product}//product is the properties of Card 
                    //{product} is the product passing in map(product,index)
                    removeFromCart={true}
                    addtoCart={false}
                    />
                ))}
            </div>
        )
    }

    const loadAllCheckout = () => {
        return(
            <div>
                <h2>This section is for checkout</h2>
               
            </div>
        )
    }
 
//as soon as things load up into the cart we want to load all the products so we need to use useEffect
//created a method to load all the things into state and calling the method 
    useEffect(() => {
       setProducts(loadCart());//calling the setProducts which is going to internaly run the loadCart method
       //setProducts is responsible for updating my state
    }, [])

    return (
        <Base title="Cart Page" description="Ready to Checkout">
            <div className="row text-center">
                <div className="col-6">
                    {loadAllProducts()}
                </div>
                <div className="col-6">
                    {loadAllCheckout()}
                </div>
               
                
            </div>
        </Base>
    )
}

export default Cart
