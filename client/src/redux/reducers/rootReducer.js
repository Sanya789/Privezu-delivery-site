import { combineReducers } from 'redux'
import { orderReducer } from './orderReducer'
import { rolesReducer } from './rolesReducer'
import { userReducer } from './usersReducer'
import { oneOrderReducer } from './oneOrderReducer'
import { oneClientReducer } from './oneClientReducer'

import { coordinateReducer } from './coordinatesReducer'
import { userRoleReducer } from './userRoleReducer'



export const rootReducer = combineReducers({
  user: userReducer,
  roles: rolesReducer,
  order: orderReducer,
  client: userReducer,
  currentOrder: oneOrderReducer,
  client: oneClientReducer,
  coordinateFrom: coordinateReducer,
  role: userRoleReducer,
})

export default rootReducer
