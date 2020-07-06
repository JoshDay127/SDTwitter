import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import {loadEpic} from "./epics";
import loadReducer from './reducers/reducerInitialLoad';
import {catchError} from "rxjs/operators";

const epics = [loadEpic]

export const rootEpic = (action$, store$, dependencies) =>
    combineEpics(...epics)(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );

export const rootReducer = combineReducers({
    loadReducer
});

/*
import ping, { pingEpic } from './ping';
import users, { fetchUserEpic } from './users';

export const rootEpic = combineEpics(
    pingEpic,
    fetchUserEpic
);

export const rootReducer = combineReducers({
    ping,
    users
});
 */