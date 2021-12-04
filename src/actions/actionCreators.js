import {
  ADD_SERVICE,
  ADD_SERVICE_CHANGES,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  END_SERVICE_EDITING,
  CHANGE_SERVICE_FIELD,
} from './actionTypes';

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function addServiceChanges(index, name, price) {
  return { type: ADD_SERVICE_CHANGES, payload: { index, name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function editService(name, price, editingMode) {
  return { type: EDIT_SERVICE, payload: { name, price, editingMode } };
}

export function endServiceEditing() {
  return { type: END_SERVICE_EDITING, payload: {} };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
