import React from 'react'
import CartItem from './CartItem'

const CartItemsList = (props) => {
  let listOfItems = props.cartItems.map(book => <CartItem key={book.id} book={book} />)

  return (
    <div>{listOfItems}</div>
  )
}


export default CartItemsList
