import {Container, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {addToBasket, fetchProducts} from "../store/actions/shopActions";
import {ProductBlock} from "../components/ProductBlock";
import {Basket} from "../components/Basket";

export function ShopPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('use effect')
        dispatch(fetchProducts())
    }, [dispatch]) 
    console.log('shop page');
    const products = useSelector((state) => state.shop.products)
    console.log(products);
 

    const handleAddToBasket = useCallback((product) => {
        dispatch(addToBasket(product))
    }, [dispatch])

    return (
        <Container>
            <Grid container spacing={2}>
                
                {products.map((product) => (
                    <Grid item xs={3} key={product.id}>

                        <ProductBlock product={product} onAddToBasket={() => handleAddToBasket(product)} />

                    </Grid>
                ))}
            </Grid>
            <Basket />
        </Container>
    )
}