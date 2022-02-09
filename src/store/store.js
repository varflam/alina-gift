import { configureStore } from '@reduxjs/toolkit';
import { alinaApiSlice } from '../api/apiSlice';
import filters from '../features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    filters,
    [alinaApiSlice.reducerPath]: alinaApiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(alinaApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});
