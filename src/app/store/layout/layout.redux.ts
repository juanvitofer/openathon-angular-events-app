import * as layout from './layout.actions';
import { Event } from '../../models/event';

/* State Interface */
export interface State {
  filteredEvents: Event[];
  loading: boolean;
  error: any;
}

/* Initial State Constant */
export const initialState: State = {
  filteredEvents: [],
  loading: false,
  error: null
};

/**
 * Method which manages the situations when those actions are launched
 */
export function reducer(state: State = initialState, action: layout.Actions): State {
  // Check Action Type
  switch (action.type) {
    // Contains the events filtered
    case layout.GET_FILTERED_EVENTS:
      // The data and the loading is started, no errors and no events
      return {
        ...state,
        filteredEvents: [],
        loading: true,
        error: null
      };
    // The request is in process or not
    case layout.GET_FILTERED_EVENTS_SUCCESS:
      // The data and the loading is ended, no errors and the events
      return {
        ...state,
        loading: false,
        filteredEvents: action.payload
      };
    // Contain the error data from the API
    case layout.GET_FILTERED_EVENTS_ERROR:
      // The data and the loading is ended and the payload property has the error data
      return {
        ...state,
        filteredEvents: [],
        loading: false,
        error: action.payload
      };
    // Default Action
    default:
      return state;
  }
}