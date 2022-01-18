import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { UserLoginReducer } from './reducers/userReducers'
// import { NotifReducer } from './reducers/notifReducers'

const reducer = combineReducers({
  
  userLogin: UserLoginReducer,
//   Notif:NotifReducer
})


const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
//   const notifdataFromStorage = localStorage.getItem('notifdata')
//   ? JSON.parse(localStorage.getItem('notifdata'))
//   : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    // Notif: { notifcationdata:notifdataFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store