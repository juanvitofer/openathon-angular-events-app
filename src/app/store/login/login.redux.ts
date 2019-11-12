import * as login from './login.actions';

/* Login State */
export interface State {
  logged: boolean;
}

/* Intial State Constant */
export const initialState: State = {
  logged: false
};

/**
 * Reducer Function
 * @param state: initial state
 * @param action: launched action
 */
export function reducer(state: State = initialState, action: login.Actions): State {
  switch (action.type) {
    // Logged Action
    case login.LOGGED:
      // Set up the logged property from our state
      return {
        ...state,
        logged: action.payload
      };
    // Default Action
    default:
      return state;
  }
}
