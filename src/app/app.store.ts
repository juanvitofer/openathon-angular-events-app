import { ActionReducerMap } from '@ngrx/store';
import * as loginReducer from './store/login/login.redux';
import * as layoutReducer from './store/layout/layout.redux';

/* Login State */
export interface State {
  login: loginReducer.State;
  layout: layoutReducer.State;
}

/* Reducers Constant */
export const reducers: ActionReducerMap<State> = {
    // Store slice to login
    login: loginReducer.reducer,
    layout: layoutReducer.reducer
};
