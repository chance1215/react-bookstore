import React from 'react'
import { removeFromCart } from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const CartItem = (props) => {

  return(
    <div>
        <div>
          <p>{props.book.title}</p>
        </div>
        <div>
          ${props.book.price}
        </div>
        <button onClick={()=>props.removeFromCart(props.book.id)}>
          Remove
        </button>
      </div>
    
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeFromCart
}, dispatch)

export default connect(null, mapDispatchToProps)(CartItem)
