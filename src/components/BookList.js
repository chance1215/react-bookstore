import React from 'react'
import Book from './Book';
import {connect} from 'react-redux'
import { Container } from 'reactstrap'

const BookList = (props) => {
  console.log('props in BookList', props) //always fires twice
// when you have a key you are checking for duplicate ids
  let listOfBooks = props.books.map(book => <Book key={book.id} book={book} />)
    return (
      <Container>{listOfBooks}</Container>
    )
  }

//mapStateToProps gives you access to the store state to be specific.
const mapStateToProps = ({books}) => ({
  books
})
//Above is the deconstructed the paramater way => (const mapStateToProps = ({books}) =>({ books
//})).
//Is  pretty much the same as saying const mapStateToProps = state => ({
//books: state.books
//})

export default connect(mapStateToProps)(BookList);
//mapDispatchToProps allows action creators that are imported to be dispatched as actions.
// Is also one of the arguments for the connect at the bottom after mapStateToProps.(not needed for this component)
