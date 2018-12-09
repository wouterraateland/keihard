import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import window from './window'
import modals from './modals'
import sponsors from './sponsors'
import pledge from './pledge'

export const reducer = combineReducers({
  router,
  window,
  modals,
  sponsors,
  pledge,
})

export default reducer
