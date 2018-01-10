import { routerReducer } from 'react-router-redux' 
import { combineReducers } from 'redux'
import update from './count.js'

export default combineReducers({
	update,
	routing: routerReducer
}) 