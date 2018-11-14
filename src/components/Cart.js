import React from 'react'
import { Card, Button,  CardTitle } from 'reactstrap'
import CartItemsList from './CartItemsList'
import { connect } from 'react-redux'


const Cart = (props) => {
  let booksInCart = props.books
      .filter(book => book.inCart)

  let totalWithoutTax = booksInCart.reduce((acc, book) => acc + book.price, 0)
      console.log('total without tax')

   // let listOfCartItems = booksInCart.map(book => <CartItem key={book.id} book={book} removeFromCartFunc={removeFromCartFunc}/>)
  return (
    <Card body>
      <CardTitle>Cart</CardTitle>
        <CartItemsList cartItems={booksInCart} />
        <p>Tax:{(totalWithoutTax * .086).toFixed(2)}</p>
        <p>Total:{(totalWithoutTax * 1.086).toFixed(2)} </p>

      <Button>Checkout</Button>
    </Card>
    // <ul>{listOfCartItems}</ul>
  )
}

const mapStateToProps = state => ({
  books: state.books
})

export default connect(mapStateToProps)(Cart)
