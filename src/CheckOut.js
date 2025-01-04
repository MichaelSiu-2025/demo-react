import React, { useContext } from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import { CartContext } from './CartContext'

export default function CheckOut() {
  
  //22. Destructing cartItems from CartContext (a)
  // let cartItem = useContext(CartContext)
  // let {cartItems} = cartItem

  //22. Destructing cartItems from CartContext (b)
  let {cartItems} = useContext(CartContext)

  let cartEmpty = cartItems.length <=0 ? true : false

  let grandTotal = cartItems.reduce((total, item) =>{
    return total += (item.price * item.quantity)  
  }, 0)
  const freeShipping = 150
  
  return (
    <div>
        <Title mainTitle="你的購物車"  />
        
        {
          cartEmpty && 
          <div>
            <p>購物車是空的</p><br/>
            <Link to="/">回到首頁</Link>
          </div>
        }

        { 
        !cartEmpty &&
        <div>
          <div id="cartSection">
            {/* Item list */}
            {
              cartItems.map(product=>(
                <div key={product.id}>
                  <img src={process.env.PUBLIC_URL+'/reactPhoto/'+product.image} alt={product.name}/>
                  <h3>Product Name : {product.name}</h3>
                  <p>Price : {product.price}</p>
                  <p>Quantity :{product.quantity}</p>
                  <p>Total Price : {product.price * product.quantity}</p>
                  <QuantityBtn productInfo={product}/>
                </div>
              ))
            }
          </div>
          <div id="totalSection">
            {/* Product + Amount total */}
            <div>全部貨品總價</div>
            <div>{grandTotal}</div>

            {/* Shipping Fee */}
            <div>運費</div>
            <div>{grandTotal >= freeShipping ? 
              <div>今次免費送貨</div> : 
              <div>滿{freeShipping}可免費送貨<br/>
              還差${freeShipping-grandTotal}</div>
              }</div>

            {/* Grand Total */}
          </div>
        </div>
        }

    </div>
  )
}
