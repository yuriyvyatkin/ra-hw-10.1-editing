import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  ADD_SERVICE_CHANGES,
  REMOVE_SERVICE,
} from '../actions/actionTypes';

const initialState = [
  {
    id: '76OOH7xQPaqkVY6WJhpJ5',
    name: 'Замена стекла',
    price: 21000,
  },
  {
    id: 'Vmii-9M7fj9C6LpjSx1Eh',
    name: 'Замена дисплея',
    price: 25000,
  },
  {
    id: 'WJ0HT1M9kA-IeAcSq6Quu',
    name: 'Замена аккумулятора',
    price: 4000,
  },
  {
    id: 'G5RdV1pOqHALXLT8hY1Oa',
    name: 'Замена микрофона',
    price: 2500,
  },
];

export default function listReducer(state = initialState, action) {
  const { index, id, name, price } = { ...action.payload };

  switch (action.type) {
    case ADD_SERVICE:
      return [...state, { id: nanoid(), name, price: Number(price) }];
    case ADD_SERVICE_CHANGES:
      const updatedState = [
        ...state.slice(0, index),
        {
          id: state[index].id,
          name: name,
          price: Number(price),
        },
        ...state.slice(index + 1),
      ];
      return updatedState;
    case REMOVE_SERVICE:
      return state.filter((service) => service.id !== id);
    default:
      return state;
  }
}
