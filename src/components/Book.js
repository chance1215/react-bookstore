import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import { connect } from 'react-redux'
import { addToCart} from '../redux/actions'
import { bindActionCreators } from 'redux'


const Book = ({book,addToCart}) => {
  return(
    <div>
      <Card>
        <CardImg top width="50" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle>{book.author}</CardSubtitle>
          <CardText>{book.description}</CardText>
          <Button onClick={() => addToCart(book.id)}
          >
            Add to Cart
          </Button>
          </CardBody>
        </Card>
      </div>
  );
};

const mapDispatchToProps = dispatch =>  bindActionCreators({
  addToCart
}, dispatch)

export default connect( null, mapDispatchToProps)(Book)
