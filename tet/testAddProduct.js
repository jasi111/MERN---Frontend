
// try to solve the error in this 
//AddProduct.js > admin folder

import React, { useState, useEffect } from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom';
import { getCategories, createaProduct } from './helper/adminapicall';
import { isAuthenticated } from "../auth/helper/index"


const AddProduct = () => {


    const { user, token } = isAuthenticated();
    //reuqiring user and token from isAuthenticated when isAthenticated runs.

    const [values, setValues] = useState(
        {
            name: "",
            description: "",
            price: "",
            stock: "",
            photo : "",
            category: "",
            categories: [],
            loading: "false",
            error: "",
            createdProduct: "",
            getaRedirect: false,
            formData: ""
        }
    )

    const { name,
        description,
        price,
        stock,
        category,
        categories,
        loading,
        error,
        createdProduct,
        getaRedirect,
        formData
    } = values


    //method for preload imagescalled inside useeffect
    const preload = () => {
        getCategories().then(data => {//coming from adminapicall.js
            // console.log(data)
            if (data.error) {//id data have error
                setValues({ ...values, error: data.error })//then load all values and only error is updated
            } else {//load all values and update categories in categories load data
                setValues({ ...values, categories: data, formData: new FormData() });//forData is given by react by default
                // console.log ("CATE", categories)
                //show what is there in the categories
            }
        })
    }

    //method for updating state for form input fields
    const handleChange = name => event => {

        //variable value -- if the valiue name is equal to photo then load file path and in
        //all other case event.target.value - 
        const value = name === "photo" ? event.target.files[0] : event.target.value
        formData.set(name, value);//set formdata with name and its value
        setValues({ ...values, [name]: value })//load all the existing values and based on what ever the name of the object is we will set value of it 

    }

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true })
        // load up all the existing values and referesh the error, if any error , set loading true

        //backend request fired
        createaProduct(user._id, token, formData)//method from admin>helper>adminapicall.js
            //user._id and token is given by isAuthenticated user
            .then(data => {//if everything tru return
                if (data.error) {//if data consist of error 
                    setValues({ ...values, error: data.error })//then setValues - load all the value and update only error data field
                } else {//and in all the other case
                    setValues({//setvalues as below
                        ...values,
                        name: "",
                        description: "",
                        price: "",
                        photo:"",
                        stock: "",
                        loading: false,
                        createdProduct: data.name
                    })
                }
            })
    }

    //success Message
    const successMessage =() =>(
        <div className="alert alert-success mt-3"
        style={{display: createdProduct ? "" : "none"}}>
            {/* display based on createProduct , if createProduct is there then show suucess message otherwise display none */}

            <h4>{createdProduct} Created Successfully</h4>

        </div>
    )

    const createProductForm = () => (
        <form>
            <span>Post photo</span>
            <div className="form-group">
                <label className="btn btn-block btn-success">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image"
                        placeholder="choose a file"
                    />
                </label>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("name")}
                    name="photo"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                />
            </div>
            <div className="form-group">
                <textarea
                    onChange={handleChange("description")}
                    name="photo"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                />
            </div>
            <div className="form-group">
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                    placeholder="Category"
                >
                    {/* selcting data from database */}
                    <option>Select</option>
                    {categories && categories.map((cate, index) => (
                        <option key={index} value="cate._id">
                            {cate.name}
                        </option>


                    ))}

                </select>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("stock")}
                    type="number"
                    className="form-control"
                    placeholder="Stock"
                    value={stock}
                />
            </div>

            <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-outline-success mb-3"
            >
                Create Product
            </button>
        </form>
    );

    useEffect(() => {
        preload();
    }, [])

    return (
        <Base
            title="Add a product here"
            description="Welcome to product creation Section..."
            className="container bg-info p-4">
            <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
                Admin Home
            </Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {createProductForm()}
                </div>
            </div>
        </Base>
    )
}

export default AddProduct
