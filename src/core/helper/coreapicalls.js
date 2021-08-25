import { API } from "../../backend";

//method to get all products
export const getProducts = () =>{
    return fetch(`${API}/products`, 
    {
        method: "GET"
    })
    .then(response => { //if everythin runs successfully
        return response.json();
    })
    .catch(err => console.log(err) )//if any error
}