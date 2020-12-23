import { createSelector } from 'reselect'


const cartSelector = state => state.cart

const productSelector = state => state.product


export const selectProductList = createSelector(
    productSelector,
    data => data.product_list
)


export const selectCartList = createSelector(
    cartSelector,
    data => data.cart_list
)