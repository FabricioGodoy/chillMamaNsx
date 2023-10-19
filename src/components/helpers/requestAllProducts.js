import { allProductsJSON } from '../Products/allProductsJSON'

export const RequestAllProducts = () => {
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(allProductsJSON)
        }, 0)
    })
}