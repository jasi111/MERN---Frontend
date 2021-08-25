import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { isAuthenticated } from "../auth/helper/index";
import { deleteProduct, getProducts } from './helper/adminapicall';

const ManageProducts = () => {
    const [products, setProducts] = useState([])//empty array becos there are lot of products in the array
    const { user, token } = isAuthenticated();

    //preload products // method to grab all the products
    const preload = () => {
        getProducts().then(data => {//method from adminapicalls.js, then gives us data
            if (data.error) {//if data error
                console.log(data.error);//show error
            } else {
                setProducts(data);//set product data 
            }
        });

    };

    //Delete product method
    const deleteThisProduct = (productId) => {
        deleteProduct(productId, user._id, token)//calling deleteProduct method from adminapicalls //given by isAuthenticated
        .then(data => {
            if(data.error){
                console.log(data.error);
            }else{
                // setProducts(data)
                preload();//instead of using setProducts here used prloaded - preload loads all the Products

            }
        })

    }



    //preload should be called up first before component mount
    //so use preload inside useEffect
    useEffect(() => {
        preload();
    }, [])

    return (
        <Base title="Welcome admin" description="Manage products here">
            <h2 className="mb-4">All products:</h2>
            <Link className="btn btn-info" to={`/admin/dashboard`}>
                <span className="">Admin Home</span>
            </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-white my-3">Total 3 products</h2>

{/* mapping through products in database */}
                    {products.map((product, index) => {
                        return(
                        <div className="row text-center mb-2 ">
                            <div className="col-4">
                                <h3 className="text-white text-left">{product.name}</h3>
                            </div>
                            <div className="col-4">
                                <Link
                                    className="btn btn-success"
                                    to={`/admin/product/update/${product._id}`}
                                >
                                    <span className="">Update</span>
                                </Link>
                            </div>
                            <div className="col-4">
                                {/* not able to call delte function like this onClikc={deleteThisProduct} , becasue we are passing product id as parameter to delte the prodduct
                                thats why use delte method as below, using call back method*/}
                                <button onClick={() => { 
                                    deleteThisProduct(product._id)
                                }} className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                        );
                    })}



                </div>
            </div>
        </Base>
    )
}

export default ManageProducts
