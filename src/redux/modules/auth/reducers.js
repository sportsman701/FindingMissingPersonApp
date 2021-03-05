import * as types from './types'

import AsyncStorage from '@react-native-community/async-storage';
import { handleActions } from 'redux-actions'

const getInitialState = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return { token };
  } catch(e) {
    console.error(e);
  }
}

export default handleActions(
  {
    [types.AUTH_LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      token: payload['auth-token'],
      profile: payload.profile
    }),
    [types.AUTH_LOGOUT_SUCCESS]: (state, { payload }) => ({
      ...state,
      profile: null,
      token: null
    })
  },
  getInitialState()
)
