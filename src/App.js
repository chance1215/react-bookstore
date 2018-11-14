import React, { Component } from 'react';
import{ Container, Row, Col } from 'reactstrap'
import TopNav from './components/TopNav'
import BookList from './components/BookList'
import Cart from './components/Cart'


//the app component doesn't necessarily always have to be a class.
// In this specific time it doesnt need a class
class App extends Component {
  render() {

    return (
      <div className="App">
      <TopNav />
        <Container fluid>
          <Row>
            <Col>
              <BookList />
            </Col>
            <Col>
              <Cart />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



export default App;
