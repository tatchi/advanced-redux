import { createStore } from 'redux';
import { users } from '../server/db';
import { initializeDB } from '../server/db/initializeDB';
import { getDefaultState } from '../server/getDefaultState';

initializeDB();

const currentUser = users[0];
const defaultState = getDefaultState(currentUser);

console.log(defaultState);

const reducer = state => state;

const store = createStore(reducer, defaultState);

export const getStore = () => store;
