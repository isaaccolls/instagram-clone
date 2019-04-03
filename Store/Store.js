import { createStore, combineReducers } from 'redux';

const reducerPrueba = (state=[], action) => state;

const reducers = combineReducers({
    reducerPrueba,
});

const store = createStore(reducers);

export default store;