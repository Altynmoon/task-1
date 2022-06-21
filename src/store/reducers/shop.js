
import {ADD_TO_BASKET, SET_PRODUCTS, INC_IN_BASKET, DELETE_FROM_BASKET, DELETE_ALL, CLOSE_MODAL, OPEN_MODAL} from '../actions/shopActions'

const initState = {
    products: [],
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    modalOpen: false,
}
export function shop(state = initState, action) {
    const newState = {...state}
    switch (action.type) {
        case SET_PRODUCTS:
            console.log(action.payload);
            newState.products = action.payload;
            break;

        case ADD_TO_BASKET:
            const elem = newState.basket.find((item) => action.payload.id === item.product.id)
            if(elem){
                elem.count += 1
                newState.basket = [...newState.basket]
            }else{
                newState.basket = [...newState.basket, 
                    {
                        product:action.payload, count: 1,
                    }
                ]
            }
            break;
        case DELETE_FROM_BASKET:
            newState.basket = newState.basket.filter((product) => product.product.id !== action.payload)
            break;
                  

        case INC_IN_BASKET:
            const prodInc = newState.basket.find((item) => action.payload.id === item.product.id)
            prodInc.count +=1;
            newState.basket = [... newState.basket];
            break;
        case DELETE_ALL:
                newState.basket = [];
                localStorage.removeItem('basket');
                break;  
        case OPEN_MODAL:
                    if (newState.basket.length !== 0) 
                    newState.modalOpen = true
                    break;
         case CLOSE_MODAL:
                    newState.modalOpen = false
                    break;
        default:
            return state
    }
    
    localStorage.setItem('basket', JSON.stringify(newState.basket))
    return newState;
}

