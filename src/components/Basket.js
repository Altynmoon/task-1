import {styled, Button, Counter, Drawer } from "@mui/material";
// import { processResult } from "immer/dist/internal";
import {useState,useCallback, useMemo} from "react";

import {useSelector, useDispatch} from "react-redux";

import { DelPro, incInBasket, handleRemoveAll } from "../store/actions/shopActions";
import { OPEN_MODAL} from "../store/actions/shopActions";
import  {OrderFormModal}  from "./OrderFormModal";

const Wrapper = styled('div')`

  position: fixed;
  z-index: 1000;
  right: 20px;
  top: 80px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .2s;
  ${({ expanded }) => (expanded && `
    width: 400px;
    height: 600px;
    background: white;
    border: 1px solid red;
    border-radius: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px;

  `)}
`

const BasketInside = styled('div')`
    width: 430px;
    height: 100%;
    background-color: #fff;
`
const BasketIcon = styled('span')`
  font-size: 40px;
`
const ItemImage =styled('img')`
  width: 50px;
  height: 30px;
`
const DeleteItem =styled('button')`
 padding-left: 1em;
`

export function BasketItem({ product,onRemove, count, image}) {

    const dispatch = useDispatch();

    const Count = useCallback((product) => {
        dispatch(incInBasket(product))
    },[dispatch])
    
    return (
        <div>
            {product.title}  x  {count}  
            {/* <ItemImage src={image} /> */}
            <DeleteItem size="small" onClick={onRemove}>Delete</DeleteItem> 
        </div>
    )
}

export function Basket() {
    
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)

    const basket = useSelector((state) => state.shop.basket);

    

    const handleModalOpen = useCallback(() => {
            console.log(basket);
            console.log('asdasd');
            dispatch({ type: OPEN_MODAL })
  
    }, [dispatch])


    return (


        <Wrapper >
            <OrderFormModal />
            <BasketIcon onClick={() => setToggle(!toggle)} >🛒</BasketIcon>
            <Drawer
            anchor={'right'}
            open={toggle}
            onClose={() => setToggle(!toggle)}
            >
            <BasketInside >    
            <Button onClick={() => dispatch(handleRemoveAll())}>Delete All</Button>
                { basket.map(({product, count  }) => (
                    <BasketItem  product={product}   count={count} key={product.id} onRemove={()=> dispatch(DelPro(product.id))  } />  
                    ))} 
            </BasketInside>  
            <Button onClick={handleModalOpen} style={{ marginTop: 'auto' }} variant="outlined">Оформить заявку</Button>      
            </Drawer>
        </Wrapper>

    )
}


