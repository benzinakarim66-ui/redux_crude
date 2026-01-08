import { type } from "@testing-library/user-event/dist/type";

export const ADD_PRODUCT="ADD_PRODUCT";
export const DELETE_PRODUCT="DELETE_PRODUCT";
export const DELET_ALL="DELET_ALL";
export const addProduct=(product)=>{
    return{
        type:ADD_PRODUCT,
        payload: product
    }

}
export const deletProduct=(id)=>{
    return{
        type:DELETE_PRODUCT,
        payload:id
    }

}
export const deletAll=()=>{
    return{
        type:DELET_ALL
    }
}