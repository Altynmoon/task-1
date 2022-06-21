import axios from "axios";
export const SET_PRODUCTS = 'shop/setProducts'

export const ADD_TO_BASKET = 'shop/addToBasket'

export const INC_IN_BASKET = 'shop/incCount'

export const DEC_IN_BASKET = 'shop/decInBasket'

export const DELETE_FROM_BASKET = 'shop/remove'

export const DELETE_ALL = 'shop/handleRemoveAll'

export const OPEN_MODAL = 'shop/openModal'

export const CLOSE_MODAL = 'shop/closeModal'

export const openModal = () => (dispatch) => {
    dispatch({
        type:OPEN_MODAL,
    })
}

export const incInBasket = (product) => (dispatch) => {
    dispatch({
        type: INC_IN_BASKET,
        payload: product,
    })
} 
export const DelPro = (id) => (dispatch) => {
    dispatch({
        type: DELETE_FROM_BASKET, 
        payload: id,
    })
}

export const handleRemoveAll = () => (dispatch) =>{
    dispatch({
        type: DELETE_ALL,
        // payload:id,
    })
}

export const fetchProducts = () => (dispatch) => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
        console.log(res);
        dispatch({
            type: SET_PRODUCTS,
            payload: res.data,
        })
    })
}

export const addToBasket = (product) => (dispatch) => {
    dispatch({
        type: ADD_TO_BASKET,
        payload: product,
    })
}


