import { API } from "../../backend";

//create Category api calls
export const createCategory =(userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`,{
        method: "POST",
        headers:{ 
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`  
        },
        body: JSON.stringify(category)
        
    }).then(response => {
        return response.json();
    })
    
    
    .catch(err => console.log(err));
}
//get all categories
export const getCategories = () => {
    return fetch(`${API}/categories`,{
        method: "GET"
    }).then(response =>{
        return response.json();
    })
    .catch(err => console.log(err));
}


//Create Product api calls
export const createaProduct =(userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`,{

        method: "POST",
        headers:{ 
            Accept:"application/json",
            Authorization:`Bearer ${token}`  
        },
        body: product
    }).then(response => {
        return response.json()
    } )
      .catch(err => console.log(err))
    
}

//get All products
export const getProducts = () => {
    return fetch(`${API}/products`,{
        method: "GET"
    }).then(response =>{
        return response.json();
    })
    .catch(err => console.log(err));
}

//delete a product
export const deleteProduct =(productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`,{

        method: "DELETE",
        headers:{ 
            Accept:"application/json",
            Authorization:`Bearer ${token}`  
        }
        // body: productno need to provide body for delete
    }).then(response => {
        return response.json()
    } )
      .catch(err => console.log(err))
    
}


//get a single product
export const getProduct = productId => {
    return fetch (`${API}/product/${productId}`,{
        method: "GET"
    }).then(response =>{
        return response.json();
    })
    .catch(err => console.log(err));
}

//update a product
export const updateProduct =(productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`,{

        method: "PUT",
        headers:{ 
            Accept:"application/json",
            Authorization:`Bearer ${token}`  
        },
        body: product
    }).then(response => {
        return response.json()
    } )
      .catch(err => console.log(err))
    
}