// import { configureStore } from '@reduxjs/toolkit';
// import { wikiReducer } from './wiki';

// export const store = configureStore({
//   reducer: {
//     wiki: wikiReducer,
//   },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import { wikiReducer } from './wiki';

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  wiki: wikiReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
