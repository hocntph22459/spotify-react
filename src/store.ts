import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { filmAPI } from './services/film'

const store = configureStore({
  reducer: {
    [filmAPI.reducerPath]: filmAPI.reducer
  },
  middleware: (getFilmMiddleware) => getFilmMiddleware().concat(filmAPI.middleware)
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store