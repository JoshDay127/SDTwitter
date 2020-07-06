//Action Types
export const INITIAL_LOAD = 'INITIAL_LOAD';
export const INITIAL_LOAD_SUCCESS = 'INITIAL_LOAD_SUCCESS';
export const INITIAL_LOAD_FAILURE = 'INITIAL_LOAD_FAILURE';


//Actions
export const initialLoad = () => ({type: INITIAL_LOAD});
export const initialLoadSuccess = (tweets) => ({
    type: INITIAL_LOAD_SUCCESS,
    payload: tweets
});
export const initialLoadFailure = (error) => ({
    type: INITIAL_LOAD_FAILURE,
    payload: error
});