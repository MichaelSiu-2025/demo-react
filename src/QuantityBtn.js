import React, { use, useState, useContext } from 'react'
import { CartContext } from './CartContext'

//20. Add Button to increase or decrease quantity of product > all page using the same button
export default function QuantityBtn({productInfo}) {

    const {cartItems, setCartItems} = useContext(CartContext)

    //21. Check if the product is already in the cart
    let productIndexInCard = cartItems.findIndex(item => 
        {return item.id === productInfo.id}
    )

    let [numInCart, setNumInCart] = useState(
        (productIndexInCard === -1) ? 0 : cartItems[productIndexInCard].quantity
    )

    const handleAdd = () => {
        //21. Check if the product is already in the cart
        if(productIndexInCard === -1){
            setCartItems([
                ...cartItems,
                {
                    ...productInfo,
                    quantity: 1
                }
            ])}
        else{
            cartItems[productIndexInCard].quantity++
            setCartItems([...cartItems])
        }
        
        setNumInCart( numInCart+1 )
    }
    const handleSubtract = () => {
        //21. Check if the product is already in the cart
        if(cartItems[productIndexInCard].quantity === 1){
            let newCartItems = cartItems.filter(item => item.id !== productInfo.id)
            setCartItems(newCartItems)
        }
        else{
            cartItems[productIndexInCard].quantity--
            setCartItems([...cartItems])
        }

        setNumInCart( numInCart-1 )
    }

  return (
    <div>
        { 
            (numInCart === 0) ?
            <div onClick={handleAdd}>加入購物車</div>
            :
            <div>
                <span onClick={handleSubtract}>-</span>
                {numInCart}件
                <span onClick={handleAdd}>+</span>
            </div>
        }
    </div>
  )
}
