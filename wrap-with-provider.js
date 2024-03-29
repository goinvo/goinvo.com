import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/state/create-store'

const store = createStore()

// eslint-disable-next-line react/display-name, react/prop-types
const wrap = ({ element }) => <Provider store={store}>{element}</Provider>

export default wrap
