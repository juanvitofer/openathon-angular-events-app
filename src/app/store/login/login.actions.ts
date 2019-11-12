import { Action } from '@ngrx/store';

/* Constant with login/logged value*/
export const LOGGED = 'login/logged';

export class Logged implements Action {
    /* Logged Type Constant */
    readonly type = LOGGED;

    /**
     * Constructor
     * @param payload: payload
     */
    constructor(public payload: boolean) {}
}

export type Actions = Logged;
