import { createStore, combineReducers } from 'redux';
import foodReducer from './reducers/foodReducer';
import promiseMiddleware from 'redux-promise';
import { reducer as formReducer } from 'redux-form';
 export const   rootReducer = combineReducers({
  foodReducer: foodReducer,
   form: formReducer
})

const store =createStore(rootReducer)

export default store;