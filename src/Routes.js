import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import UpdateProduct from './admin/UpdateProduct';
import ManageCategories from './admin/ManageCategories';
import ManageProducts from './admin/ManageProducts';
import AdminRoute from './auth/helper/AdminRoute';
import PrivateRoute from './auth/helper/PrivateRoute';
import Home from "./core/Home";
import AdminDashboard from './user/AdminDashboard';
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashboard from './user/UserDashboard';
import Cart from './core/Cart';


function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/cart" exact component={Cart} />

                    <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
                    <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                    <AdminRoute path="/admin/create/category" exact component={AddCategory} />
                    <AdminRoute path="/admin/categories" exact component={ManageCategories} />
                    <AdminRoute path="/admin/create/product" exact component={AddProduct} />
                    <AdminRoute path="/admin/products" exact component={ManageProducts} />
                    <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />



                </Switch>

            </BrowserRouter>
        </div>
    )
}

export default Routes
