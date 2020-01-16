import { CHANGE_SEARCH_FIELD } from "./constants";

// setting the initialstate as a starting point
const initialState = () => {
    searchField: '';
};

// REDUCER with default parameters
// it takes in the state of the app and what action happened
// it reads the action and outputs the state
// it has to change the state as a pure function
// we switch according to the action.type and return a new state if the case is fulfilled
export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    };
};