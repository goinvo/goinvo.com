import { createStore as reduxCreateStore } from 'redux'
import { allCategory } from '../components/categories-list'

const reducer = (state, action) => {
  if (action.type === `SET_CATEGORY`) {
    return Object.assign({}, state, {
      selectedCategory: action.value,
    })
  }
  return state
}

const initialState = { selectedCategory: allCategory }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
