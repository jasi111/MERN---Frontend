
//method to put in cart
export const addItemToCart = (item, next) =>{//next is the middleware, next is usedd here because therre will be call back
let cart = [] 
if (typeof window !== undefined ){ // if we have access to window objecct means wee have access to localstorage
    if (localStorage.getItem("cart")){//getItem(cart) from localstoreage- get cart
        cart = JSON.parse(localStorage.getItem("cart"))//pushing cart to cart - temporary
    }
    cart.push({//pushing cart to cart
        ...item, 
        count:1
        //count is defined in card in useState
        //increment the count to 1
    })
    localStorage.setItem("cart", JSON.stringify(cart))//set the item with the name of cart and stingify the cart
    next();
}
}

export const loadCart = () => {
    if (typeof window !== undefined ){ // if we have access to window objecct means wee have access to localstorage
        if (localStorage.getItem("cart")){//getItem(cart) from localstoreage- get cart
           return JSON.parse(localStorage.getItem("cart"))
        }

}
}