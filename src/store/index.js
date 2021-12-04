import { createStore, combineReducers } from "redux";
import formReducer from '../reducers/formReducer';
import listReducer from '../reducers/listReducer';

const reducer = combineReducers({
  form: formReducer,
  list: listReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
