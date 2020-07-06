import React, {useEffect} from 'react';
import store from '../redux/store';

export const TweetList = () => {
    useEffect(() => {
        //Dispatch initial Load
        store.dispatch({type: 'INITIAL_LOAD'});
    }, []);

    return (
        <div>
            <h1>Tweets:</h1>
        </div>
    );
}

export default TweetList;