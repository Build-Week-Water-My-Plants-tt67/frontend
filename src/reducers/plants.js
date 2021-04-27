import { GET_PLANTS_START, GET_PLANTS_SUCCESS, GET_PLANTS_FAILURE, EDIT_PLANTS_START, EDIT_PLANTS_SUCCESS, EDIT_PLANTS_FAILURE, DELETE_PLANTS_START, DELETE_PLANTS_SUCCESS, DELETE_PLANTS_FAILURE } from '../actions';

const initialState = {
  plants: [],
  error: '',
  isCallingAPI: false
};

export const plants = (state=initialState, action) => {
  switch (action.type) {
    case GET_PLANTS_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      };
    case GET_PLANTS_SUCCESS:
      return {
        ...state,
        plants: action.payload,
        isCallingAPI: false
      };
    case GET_PLANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      };
    case EDIT_PLANTS_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      };
    case EDIT_PLANTS_SUCCESS:
      return {
        ...state,
        plants: action.payload,
        isCallingAPI: false
      };
    case EDIT_PLANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      };
    case DELETE_PLANTS_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      };
    case DELETE_PLANTS_SUCCESS:
      return {
        ...state,
        plants: action.payload,
        isCallingAPI: false
      };
    case DELETE_PLANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      };
    default:
      return state;
  }
}

