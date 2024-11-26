import { createStore as reduxCreateStore } from 'redux'
import { allCategory } from '../components/categories-list'

const reducer = (state, action) => {
  console.log('SETTING CATEGORY IN STORE')
  console.log(action.value)
  if (action.type === `SET_CATEGORY`) {
    return Object.assign({}, state, {
      selectedCategory: action.value,
    })
  }
  return state
}

// const initialState = { selectedCategory: allCategory }

const createStore = () => reduxCreateStore(reducer, { selectedCategory: null })
export default createStore
