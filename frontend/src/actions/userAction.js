import axios from 'axios';
import { ORDER_LIST_MY_RESET } from '../constants/orderConstants';
import {
  USER_DETAILS_FAILURE,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAILURE,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAILURE,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_FAILURE,
  USER_DELETE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_FAILURE,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants";

export const logout = () => dispatch => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: ORDER_LIST_MY_RESET });
    dispatch({ type: USER_LIST_RESET });
}

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {headers: {'Content-Type': 'application/json'}}
        const {data} = await axios.post('/api/users/login', {email, password}, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch(error){
                dispatch({
                  type: USER_LOGIN_FAILURE,
                  payload:
                    error.response && error.response.data.message
                      ? error.response.data.message
                      : error.message,
                });
    }
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
 
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async(dispatch, getState) => {
  try{
    dispatch({
      type: USER_DETAILS_REQUEST
    })
    const {userLogin: {userInfo}} = getState()
    const config = {
     headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`
    },
  };
  //Here the id is not the actual user._id field, this is a parameterized query string which takes the value 'profile' sent from the ProfilePage
  const {data} = await axios.get(`/api/users/${id}`, config)
  dispatch({
    type: USER_DETAILS_SUCCESS,
    payload: data
  });

  }catch(error){
    dispatch({
      type: USER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const updateUserProfile = (user) => async(dispatch, getState) => {
  try{
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST
    })
    const {userLogin:{userInfo}} = getState()
    const config = {
     headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`
    },
  };
  const {data} = await axios.put(`api/users/profile`, user, config)
  
  dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS, 
      payload: data
    })

  dispatch({
    type: USER_LOGIN_SUCCESS,
    payload: data,
  })

  localStorage.setItem('userInfo', JSON.stringify(data))

  }catch(error){
    dispatch({
      type: USER_UPDATE_PROFILE_FAILURE,
       payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/users`, config);
    console.log(data);
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: USER_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(`/api/users/${id}`, config);
    console.log(data);
    dispatch({
      type: USER_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/users/${user._id}`,user, config);

    dispatch({
      type: USER_UPDATE_SUCCESS,
    });
    
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data})
    
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};