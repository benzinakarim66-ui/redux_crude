import { ADD_PRODUCT, DELETE_PRODUCT ,DELET_ALL} from "./action";

const initialState = {
  products: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case DELETE_PRODUCT:
        return{
            ...state,
            products:state.products.filter(
                p=>p.id!==action.payload
            )
        }
    case DELET_ALL:
        return{
            ...state,
            products:[]
        }

    default:
      return state;   
  }
};
