import axios from 'axios'

export const FETCH_BOOKS_SUCCESS ='FETCH_BOOKS_SUCCESS'
export const FETCH_BOOKS_FAILED ='FETCH_BOOKS_FAILED'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


  export const fetchBooks =  () => {
  return dispatch => {
     axios
      .get(`http://localhost:8082/api/books`)
      .then(response => dispatch({
         type: FETCH_BOOKS_SUCCESS,
         payload: response.data
      }))
      .catch(err => dispatch({
        type: FETCH_BOOKS_FAILED,
        payload: err
      }))
    }
  }


//does the same as the one as the top, this one just has more code and uses async await.
// the only premise of async await is to make asyncranist code look syncranist.
// export const fetchBooks = async () => {
//   return dispatch => {
//     try{
//       let response =  await axios.get(`http://localhost:8082/api/books`)
//       let books = response.data
//       dispatch({
//         type: FETCH_BOOKS_SUCCESS,
//         payload: books
//       })
//     } catch (err) {
//       dispatch({
//         type:FETCH_BOOKS_FAILED,
//         payload: err
//       })
//     }
//   }
// }





export const addToCart = id => {
  return dispatch => {
    dispatch({
      type:ADD_TO_CART,
      payload: id
    })
  }
}

export const removeFromCart = id => {
  return dispatch => {
    dispatch({
      type:REMOVE_FROM_CART,
      payload: id
    })
  }
}
