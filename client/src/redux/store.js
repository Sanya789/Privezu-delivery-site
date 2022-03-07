import {applyMiddleware,createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import {rootReducer} from './reducers/rootReducer'
import {initState} from './initState'
import thunk from 'redux-thunk'

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
