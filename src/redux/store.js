import { createStore, combineReducers, applyMiddleware} from 'redux'
import booksReducer from './booksReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  books: booksReducer
})
const middleware = [thunk,logger]

export default () => createStore(rootReducer, applyMiddleware(...middleware))
