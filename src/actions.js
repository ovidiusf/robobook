import { CHANGE_SEARCH_FIELD } from './constants';

// ACTION
// text parameter is the input of the user in the search field
// setSearchField returns an object with a type and a payload (content)
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});
