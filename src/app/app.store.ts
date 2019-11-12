import { ActionReducerMap } from '@ngrx/store';
import * as loginReducer from './store/login/login.redux';

/* Login State */
export interface State {
  login: loginReducer.State;
}

/* Reducers Constant */
export const reducers: ActionReducerMap<State> = {
    // Store slice to login
    login: loginReducer.reducer
};
