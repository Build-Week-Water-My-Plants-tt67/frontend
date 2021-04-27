import axiosWithAuth from '../utils/axiosWithAuth';

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const userLogin = (URL, credentials) => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  axiosWithAuth
    .post(URL, credentials)
    .then( res => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: USER_LOGIN_FAILURE, payload: err});
    })
};

export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";
export const editUser = (URL, user) => dispatch => {
  dispatch({ type: EDIT_USER_START });
  axiosWithAuth
    .put(URL, user)
    .then( res => {
      dispatch({ type: EDIT_USER_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: EDIT_USER_FAILURE, payload: err});
    })
};

export const USER_LOGOUT = "USER_LOGOUT";
export const userLogout = () => {
  return { type: USER_LOGOUT }
};

export const GET_PLANTS_START = "GET_PLANTS_START";
export const GET_PLANTS_SUCCESS = "GET_PLANTS_SUCCESS";
export const GET_PLANTS_FAILURE = "GET_PLANTS_FAILURE";
export const getPlants = (URL) => dispatch => {
  dispatch({ type: GET_PLANTS_START });
  axiosWithAuth
    .get(URL)
    .then( res => {
      dispatch({ type: GET_PLANTS_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: GET_PLANTS_FAILURE, payload: err});
    })
};

export const EDIT_PLANTS_START = "EDIT_PLANTS_START";
export const EDIT_PLANTS_SUCCESS = "EDIT_PLANTS_SUCCESS";
export const EDIT_PLANTS_FAILURE = "EDIT_PLANTS_FAILURE";
export const editPlants = (URL, plant) => dispatch => {
  dispatch({ type: EDIT_PLANTS_START });
  axiosWithAuth
    .put(URL, plant)
    .then( res => {
      dispatch({ type: EDIT_PLANTS_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: EDIT_PLANTS_FAILURE, payload: err});
    })
};

export const DELETE_PLANTS_START = "DELETE_PLANTS_START";
export const DELETE_PLANTS_SUCCESS = "DELETE_PLANTS_SUCCESS";
export const DELETE_PLANTS_FAILURE = "DELETE_PLANTS_FAILURE";
export const deletePlants = (URL) => dispatch => {
  dispatch({ type: DELETE_PLANTS_START });
  axiosWithAuth
    .delete(URL)
    .then( res => {
      dispatch({ type: DELETE_PLANTS_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: DELETE_PLANTS_FAILURE, payload: err});
    })
};