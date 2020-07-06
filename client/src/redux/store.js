import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { createEpicMiddleware} from "redux-observable";
import {rootEpic, rootReducer} from './modules/combine';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware, ...getDefaultMiddleware()]
});

epicMiddleware.run(rootEpic);

export default store;