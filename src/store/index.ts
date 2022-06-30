import { configureStore } from '@reduxjs/toolkit';
import books from '../slices/BooksSlice'

export const store = configureStore({
    reducer: { books },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>