import {
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  END_SERVICE_EDITING,
} from '../actions/actionTypes';

const initialState = {
  name: '',
  price: 0,
  editingMode: {
    state: false,
    index: '',
  }
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name } = action.payload;
      let value = Number(action.payload.value)
        || action.payload.value;

      return { ...state, [name]: value };
    case EDIT_SERVICE:
      return { ...state, ...action.payload };
    case END_SERVICE_EDITING:
      return initialState;
    default:
      return state;
  }
}
