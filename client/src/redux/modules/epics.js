import {catchError, map, mapTo, mergeMap} from 'rxjs/operators';
import {ofType} from "redux-observable";
import {getAllTweets} from '../../api/tweetsAPI';
import {from, Observable, of} from "rxjs";

import {INITIAL_LOAD, INITIAL_LOAD_FAILURE, INITIAL_LOAD_SUCCESS, initialLoadSuccess} from "./actionTypes";

//Epic
export const loadEpic = action$ => action$.pipe(
        ofType(INITIAL_LOAD),
        mergeMap(async () =>{
            await getAllTweets()
                .then(tweets => {
                    //console.log(tweets);
                    return tweets;
                });
        }),
        map(tweets => initialLoadSuccess(tweets))
    );

